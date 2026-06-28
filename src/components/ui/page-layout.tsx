import { Container } from "@/components/ui/container"
import { SectionTitle } from "@/components/ui/section-title"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import type { BreadcrumbItem } from "@/components/ui/breadcrumbs"

interface PageLayoutProps {
  title: string
  description: string
  label?: string
  breadcrumbs: BreadcrumbItem[]
  children: React.ReactNode
  cta?: {
    title: string
    description: string
    linkHref: string
    linkLabel: string
  }
}

function PageLayout({ title, description, label, breadcrumbs, children, cta }: PageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        <section className="pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 bg-muted/30">
          <Container>
            <Breadcrumbs items={breadcrumbs} />
            <SectionTitle
              label={label}
              title={title}
              description={description}
            />
          </Container>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <Container>
            {children}
          </Container>
        </section>

        {cta && (
          <section className="py-16 sm:py-20 bg-muted/50">
            <Container>
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">{cta.title}</h2>
                <p className="text-muted-foreground mb-8">{cta.description}</p>
                <a
                  href={cta.linkHref}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background hover:bg-foreground/90 transition-all"
                >
                  {cta.linkLabel}
                </a>
              </div>
            </Container>
          </section>
        )}
      </main>
    </div>
  )
}

export { PageLayout }
