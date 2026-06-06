import { useEffect, useState } from "react";
import { TicketForm } from "./components/TicketForm";
import type { Ticket } from "./types/ticket";
import { tickets as initialTickets  } from "./data/tickets";
import { FilterControls } from "./components/FilterControls";
import { SummaryCard } from "./components/SummaryCard";
import { TicketList } from "./components/TicketList";
import type { PriorityFilter, StatusFilter } from "./types/filters";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("All");
  const [priorityFilter, setPriorityFilter] = useState<PriorityFilter>("All");

  const [ticketList, setTicketList] = useState<Ticket[]>(() => {
    const savedTickets = localStorage.getItem("tickets");

    if (savedTickets) {
      return JSON.parse(savedTickets) as Ticket[];
    }

    return initialTickets;
  });

  useEffect(() => {
    localStorage.setItem("tickets", JSON.stringify(ticketList));
  }, [ticketList]);


  const filteredTickets = ticketList.filter((ticket) => {
    const matchesSearch =
      ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.module.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.owner.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || ticket.status === statusFilter;

    const matchesPriority =
      priorityFilter === "All" || ticket.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  const totalTickets = ticketList.length;

  const openTickets = ticketList.filter(
    (ticket) => ticket.status === "Open"
  ).length;

  const inProgressTickets = ticketList.filter(
    (ticket) => ticket.status === "In Progress"
  ).length;

  const resolvedTickets = ticketList.filter(
    (ticket) => ticket.status === "Resolved"
  ).length;

  const blockedTickets = ticketList.filter(
    (ticket) => ticket.status === "Blocked"
  ).length;

  const criticalTickets = ticketList.filter(
    (ticket) => ticket.priority === "Critical"
  ).length;


  function handleAddTicket(newTicket: Omit<Ticket, "id">) {
    const ticketWithId: Ticket = {
      id: Date.now(),
      ...newTicket,
    };

    setTicketList([ticketWithId, ...ticketList]);
  }

  function handleResolveTicket(id: number) {
    setTicketList(
      ticketList.map((ticket) =>
        ticket.id === id
          ? { ...ticket, status: "Resolved" }
          : ticket
      )
    );
  }

  function handleDeleteTicket(id: number) {
    setTicketList(ticketList.filter((ticket) => ticket.id !== id));
  }

  function handleResetTickets() {
    setTicketList(initialTickets);
  }

  return (
    <div className="app">
      <h1>Ticket Intelligence Dashboard</h1>

      <p className="app-subtitle">
        Track enterprise support tickets by status, priority, owner, and module.
      </p>

      <button className="reset-button" onClick={handleResetTickets}>
        Reset Demo Data
      </button>

      <div className="summary-grid">
        <SummaryCard value={totalTickets} label="Total Tickets" />
        <SummaryCard value={openTickets} label="Open" />
        <SummaryCard value={inProgressTickets} label="In Progress" />
        <SummaryCard value={resolvedTickets} label="Resolved" />
        <SummaryCard value={blockedTickets} label="Blocked" />
        <SummaryCard value={criticalTickets} label="Critical" />
      </div>

      <TicketForm onAddTicket={handleAddTicket} />

      <FilterControls
        searchTerm={searchTerm}
        statusFilter={statusFilter}
        priorityFilter={priorityFilter}
        onSearchChange={setSearchTerm}
        onStatusChange={setStatusFilter}
        onPriorityChange={setPriorityFilter}
      />

      <TicketList
        tickets={filteredTickets}
        onResolve={handleResolveTicket}
        onDelete={handleDeleteTicket}
      />
    </div>

    
  );
}

export default App;