import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/section-heading";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";

export function Faq() {
  const t = useTranslations("home.faq");
  const items = t.raw("items") as { question: string; answer: string }[];

  return (
    <section className="bg-muted/30 py-20 sm:py-28">
      <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
      <Container className="mt-12 max-w-3xl">
        <Reveal>
          <Accordion type="single" collapsible className="-mx-2 sm:mx-0">
            {items.map((faq, i) => (
              <div className="group" key={i}>
                <AccordionItem
                  value={`item-${i}`}
                  className="peer rounded-xl border-none px-5 py-1 data-[state=open]:bg-muted md:px-7"
                >
                  <AccordionTrigger className="text-base hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="text-base">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
                <hr className="mx-5 -mb-px border-border group-last:hidden peer-data-[state=open]:opacity-0 md:mx-7" />
              </div>
            ))}
          </Accordion>
        </Reveal>

        <Reveal>
          <p className="mt-6 text-center text-muted-foreground">
            {t("support")}{" "}
            <Link
              href="/contact"
              className="font-medium text-primary hover:underline"
            >
              {t("supportLink")}
            </Link>
            .
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
