# 📊 TypeScript Trade Tracker

Welcome to the *Trade Tracker App*! 🧮  
A TypeScript-powered project built to help you organize and track trade negotiations with elegance, precision, and a dash of decorators. With views that sparkle, logic that's clean, and interfaces that scream modularity, this app makes tracking economic exchanges fun and efficient.

---

## 🚀 Features

- ✨ Add trades using a simple form
- 📆 Only allows entries on business days
- ⏱️ Logs execution time with decorators
- 👀 Uses `@inspect` to track method calls
- 🧠 Prevents duplicate entries with smart filtering
- 📥 Imports trades from a mock external service
- 📚 Updates UI with live data using custom views

---

## 🛠️ Tech Stack

| Tool/Concept        | Purpose                              |
|---------------------|--------------------------------------|
| **TypeScript**      | Static typing & enhanced JS features |
| **Decorators**      | DOM injection, logging, escape       |
| **OOP**             | Models, Views, Controller structure  |
| **Enum**            | Weekday filtering for business logic |
| **Interfaces**      | Uniform model behavior across classes|

---

## 🧩 Components Breakdown

### ✅ Controller

Handles form interaction, validates business day, imports data, and updates views.

```ts
@inspect()
@logarTempoDeExecucao()
public adiciona(): void {
  ...
}
```

### 📦 Models

- `Negociacao`: the trade entry (date, quantity, value)
- `Negociacoes`: collection of trades with comparison and serialization

### 🖼️ Views

- `NegociacoesView`: renders trade table
- `MensagemView`: shows success or warning messages

---

## 🔍 Business Day Logic

```ts
private ehDiaUtil(data: Date): boolean {
  return data.getDay() > DiasDaSemana.DOMINGO
      && data.getDay() < DiasDaSemana.SABADO;
}
```

❌ No weekend trades allowed!

---

## 💡 Decorator Power

- `@domInjector`: automatic DOM element injection
- `@escape`: security for rendering HTML safely
- `@inspect` & `@logarTempoDeExecucao`: development insights with fun logging

---

## 🎯 Future Ideas

- ✅ Add persistent storage
- 📈 Graph visualizations of trade volume
- 🔒 Authenticated user sessions
- 🌐 API integration for real-time financial data

---

## 🙋 Author Note

This project is a playground of TypeScript magic: decorators, enums, interfaces, and a clean MVC-like structure.  
It's designed for learning and fun—with trades that go beyond the console and into elegant UI updates.

---

## 📄 License

MIT — Feel free to fork, study, and customize.  
Just promise me you’ll never trade on weekends. 😉
