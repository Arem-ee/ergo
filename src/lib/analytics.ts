type EventName =
  | "page_view"
  | "button_click"
  | "form_submit"
  | "form_success"
  | "form_error"
  | "configurator_color_change"
  | "configurator_wheel_change"
  | "configurator_interior_change"
  | "configurator_package_change"
  | "configurator_reserve"
  | "nav_click"
  | "mobile_menu_open"
  | "mobile_menu_close"
  | "interior_hotspot_click"
  | "carousel_slide_change"

interface AnalyticsEvent {
  name: EventName
  properties?: Record<string, string | number | boolean>
}

function trackEvent(event: AnalyticsEvent): void {
  if (process.env.NODE_ENV === "development") {
    console.log("[Analytics]", event.name, event.properties)
  }

  if (typeof window !== "undefined" && "gtag" in window) {
    const gtag = (window as unknown as Record<string, unknown>).gtag as
      | ((...args: unknown[]) => void)
      | undefined
    gtag?.("event", event.name, event.properties)
  }
}

function trackPageView(page: string): void {
  trackEvent({ name: "page_view", properties: { page } })
}

const analytics = {
  trackEvent,
  trackPageView,
  buttonClick: (label: string) => trackEvent({ name: "button_click", properties: { label } }),
  formSubmit: (formName: string) => trackEvent({ name: "form_submit", properties: { formName } }),
  formSuccess: (formName: string) => trackEvent({ name: "form_success", properties: { formName } }),
  formError: (formName: string, error: string) =>
    trackEvent({ name: "form_error", properties: { formName, error } }),
  configuratorChange: (option: string, value: string) =>
    trackEvent({ name: `configurator_${option}_change` as EventName, properties: { value } }),
  navClick: (label: string) => trackEvent({ name: "nav_click", properties: { label } }),
  hotspotClick: (hotspotId: string) =>
    trackEvent({ name: "interior_hotspot_click", properties: { hotspotId } }),
}

export { analytics }
export type { EventName, AnalyticsEvent }
