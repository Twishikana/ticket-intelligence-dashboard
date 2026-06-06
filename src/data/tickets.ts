//uses Ticket
import type { Ticket } from "../types/ticket";

export const tickets: Ticket[] = [
  {
    id: 1,
    title: "Saved search filter not loading",
    status: "Open",
    owner: "Twish",
    module: "Accounts",
    priority: "Low",
  },
  {
    id: 2,
    title: "Dashboard metric mismatch",
    status: "In Progress",
    owner: "Twish",
    module: "Sales Dashboard",
    priority: "High",

  },
  {
    id: 3,
    title: "Contact preference icon not updating",
    status: "Resolved",
    owner: "Twish",
    module: "Contacts",
    priority: "Critical",
  },
  {
    id: 4,
    title: "Opportunity list view column issue",
    status: "Open",
    owner: "Twish",
    module: "Opportunities",
    priority:"Low"
  },
  {
    id: 5,
    title: "Lead header warning icon missing",
    status: "Blocked",
    owner: "Twish",
    module: "Leads",
    priority:"Critical",
  },
  {
    id: 6,
    title: "Lead foldout malfunctioning",
    status: "In Progress",
    owner: "Arka",
    module: "Leads",
    priority:"Medium",
  },
];