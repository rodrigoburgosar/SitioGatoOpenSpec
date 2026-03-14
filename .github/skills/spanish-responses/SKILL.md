---
name: spanish-responses
description: Ensure the AI responds in Spanish for all interactions when this skill is used.
license: MIT
compatibility: Works with any OpenSpec/CoPilot agent that supports skills.
metadata:
  author: OpenSpec user
  version: "1.0"
---

Esta skill está diseñada para que el asistente responda **siempre en español**.

## Cómo usar

1. Invoca esta skill en tu conversación (por ejemplo, escribiendo `/opsx:spanish-responses`).
2. A partir de ese momento, todas las respuestas deben estar en español, incluyendo explicaciones, instrucciones y mensajes de estado.

## Comportamiento esperado

- Responder en español aún cuando el contenido técnico incluya nombres de archivos, comandos o fragmentos de código.
- Mantener la claridad y brevedad, adaptándose al estilo habitual de Copilot, pero en español.
- Si el usuario solicita explícitamente otro idioma, pedir confirmación antes de cambiar.
