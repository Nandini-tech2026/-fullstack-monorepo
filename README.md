# Fullstack Monorepo

## Overview
This monorepo has client (React) and 
server (Express) in one repository.

## Structure
- client/ — React frontend
- server/ — Express backend
- docs/ — Audit reports and screenshots
- tests/ — Unit and E2E tests

## Local Setup
1. npm install
2. npm run dev
3. Open http://localhost:3001/api/health

## Accessibility Audit
Audited usa.gov using:
- Lighthouse score: 98/100
- WAVE tool: 0 errors, 3 alerts

Five issues documented in 
docs/accessibility-audit-filled.csv

## First Vertical Slice
Health check endpoint:
- Server: GET /api/health
- Returns: { status: "ok" }
- Client: displays server status
