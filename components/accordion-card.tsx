import {
  Accordion, AccordionContent,
  AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion"

import {
  Card, CardContent,
  CardDescription, CardHeader,
  CardTitle
} from "@/components/ui/card"

const items = [
  {
    value: "plans",
    trigger: "What The Recommended Plans For You",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, possimus!",
  },
  {
    value: "billing",
    trigger: "Tier Billing",
    content: 
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, optio?"
  },
  {
    value: "cancel",
    trigger: "How To Stop Subscription",
    content: 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, possimus!"
  },
  {
    value: "contact",
    trigger: "How To Contact US",
    content: 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, possimus!"
  }
]

export function AccordionCard () {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Subscription & Billing</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laboriosam, aspernatur rerum
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion defaultValue={[]}>
          {items.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>{item.trigger}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}