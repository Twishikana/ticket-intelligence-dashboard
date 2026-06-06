import { useState } from "react";
import type { Ticket, TicketPriority, TicketStatus } from "../types/ticket";

interface TicketFormProps {
  onAddTicket: (ticket: Omit<Ticket, "id">) => void;
}

export function TicketForm({ onAddTicket }: TicketFormProps) {
  const [title, setTitle] = useState("");
  const [owner, setOwner] = useState("");
  const [module, setModule] = useState("");
  const [status, setStatus] = useState<TicketStatus>("Open");
  const [priority, setPriority] = useState<TicketPriority>("Medium");
  const [error, setError] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!title.trim() || !owner.trim() || !module.trim()) {
        setError("Please fill out title, owner, and module.");
        return;
    }

    onAddTicket({
      title,
      owner,
      module,
      status,
      priority,
    });

    setTitle("");
    setOwner("");
    setModule("");
    setStatus("Open");
    setPriority("Medium");
    setError("");
  }

  return (
    <form className="ticket-form" onSubmit={handleSubmit}>
      <h2>Create Ticket</h2>
      {error && <p className="form-error">{error}</p>}

      <input
        type="text"
        placeholder="Ticket title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <input
        type="text"
        placeholder="Owner"
        value={owner}
        onChange={(event) => setOwner(event.target.value)}
      />

      <input
        type="text"
        placeholder="Module"
        value={module}
        onChange={(event) => setModule(event.target.value)}
        
      />

      <select
        value={status}
        onChange={(event) => setStatus(event.target.value as TicketStatus)}
      >
        <option value="Open">Open</option>
        <option value="In Progress">In Progress</option>
        <option value="Resolved">Resolved</option>
        <option value="Blocked">Blocked</option>
      </select>

      <select
        value={priority}
        onChange={(event) => setPriority(event.target.value as TicketPriority)}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
        <option value="Critical">Critical</option>
      </select>

      <button type="submit">Add Ticket</button>
    </form>
  );
}