export interface FAQItem {
  id: string
  question: string
  answer: string
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "warranty",
    question: "What warranty coverage does ERGO offer?",
    answer:
      "Every ERGO vehicle comes with a 4-year / 50,000-mile limited bumper-to-bumper warranty and an 8-year / 100,000-mile battery and drivetrain warranty. Additional extended warranty plans are available through your local ERGO studio.",
  },
  {
    id: "financing",
    question: "What financing options are available?",
    answer:
      "We offer competitive financing through ERGO Financial Services, including traditional auto loans, lease options, and balloon payment plans. Most qualified buyers receive a decision within minutes. Special rates are available for eligible returning customers.",
  },
  {
    id: "delivery",
    question: "How does the delivery process work?",
    answer:
      "Once your vehicle completes production, you will be invited to schedule delivery at your preferred ERGO studio. Our delivery specialists will walk you through every feature, connect your mobile app, and answer any questions. Home delivery is available in select regions.",
  },
  {
    id: "charging",
    question: "What charging solutions are included?",
    answer:
      "Every new ERGO includes a Level 2 home charging unit with standard installation. You also receive 1,000 kWh of complimentary charging on the ERGO charging network. The vehicle supports DC fast charging at up to 350 kW, adding 200 miles of range in approximately 15 minutes.",
  },
]
