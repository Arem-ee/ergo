"use client"

import { useState, useCallback } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { motion, AnimatePresence } from "framer-motion"
import { Container } from "@/components/ui/container"
import { SectionTitle } from "@/components/ui/section-title"
import { FormField } from "@/components/ui/form-field"
import { Reveal } from "@/components/animations"

const testDriveSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  vehicle: z.string().min(1, "Please select a vehicle model"),
  date: z.string().min(1, "Please select a preferred date"),
})

type TestDriveFormData = z.infer<typeof testDriveSchema>

function TestDriveSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TestDriveFormData>({
    resolver: zodResolver(testDriveSchema),
  })

  const scrollInputIntoView = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    setTimeout(() => e.target.scrollIntoView({ behavior: "smooth", block: "center" }), 300)
  }, [])

  const onSubmit = async (_data: TestDriveFormData) => {
    setStatus("loading")
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setStatus("success")
  }

  if (status === "success") {
    return (
      <section id="test-drive" className="py-20 sm:py-28 lg:py-36 bg-muted/50">
        <Container>
          <Reveal variant="slideUp">
            <div className="max-w-lg mx-auto text-center">
              <div className="size-16 rounded-full bg-foreground/5 flex items-center justify-center mx-auto mb-6">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M6 14L11 19L22 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Test Drive Booked!</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Thank you for your interest. A member of our team will confirm your appointment shortly.
              </p>
              <button
                type="button"
                onClick={() => { reset(); setStatus("idle") }}
                className="inline-flex h-10 items-center justify-center rounded-full border border-input px-6 text-sm font-medium transition-colors hover:bg-muted"
              >
                Book Another
              </button>
            </div>
          </Reveal>
        </Container>
      </section>
    )
  }

  return (
    <section id="test-drive" className="py-20 sm:py-28 lg:py-36 bg-muted/50">
      <Container>
        <Reveal variant="slideUp">
          <div className="max-w-2xl mx-auto">
            <SectionTitle
              title="Book a Test Drive"
              description="Experience ERGO firsthand. Schedule a drive at your nearest studio and feel the future of motion."
            />
            <form
              className="space-y-5"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <FormField
                  label="First Name"
                  id="first-name"
                  type="text"
                  placeholder="John"
                  autoComplete="given-name"
                  onFocus={scrollInputIntoView}
                  error={errors.firstName?.message}
                  {...register("firstName")}
                />
                <FormField
                  label="Last Name"
                  id="last-name"
                  type="text"
                  placeholder="Doe"
                  autoComplete="family-name"
                  onFocus={scrollInputIntoView}
                  error={errors.lastName?.message}
                  {...register("lastName")}
                />
              </div>

              <FormField
                label="Email"
                id="email"
                type="email"
                placeholder="john@example.com"
                autoComplete="email"
                onFocus={scrollInputIntoView}
                error={errors.email?.message}
                {...register("email")}
              />

              <FormField
                label="Phone"
                id="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                autoComplete="tel"
                onFocus={scrollInputIntoView}
                error={errors.phone?.message}
                {...register("phone")}
              />

              <div className="space-y-2">
                <label htmlFor="vehicle" className="block text-sm font-medium text-foreground">
                  Preferred Vehicle
                </label>
                <select
                  id="vehicle"
                  className="flex h-12 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                  {...register("vehicle")}
                  defaultValue=""
                >
                  <option value="" disabled>Select a model</option>
                  <option value="ergo-s">ERGO S</option>
                  <option value="ergo-x">ERGO X</option>
                  <option value="ergo-r">ERGO R</option>
                  <option value="ergo-gt">ERGO GT</option>
                </select>
                {errors.vehicle && (
                  <p className="text-xs text-destructive">{errors.vehicle.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="date" className="block text-sm font-medium text-foreground">
                  Preferred Date
                </label>
                <input
                  id="date"
                  type="date"
                  className="flex h-12 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                  {...register("date")}
                />
                {errors.date && (
                  <p className="text-xs text-destructive">{errors.date.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background mt-2 disabled:opacity-60"
                whileHover={status === "loading" ? undefined : { scale: 1.01 }}
                whileTap={status === "loading" ? undefined : { scale: 0.98 }}
              >
                <AnimatePresence mode="wait">
                  {status === "loading" ? (
                    <motion.span
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <svg className="animate-spin size-4" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="31.4 31.4" strokeLinecap="round" />
                      </svg>
                      Submitting...
                    </motion.span>
                  ) : (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Schedule Test Drive
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export { TestDriveSection }
