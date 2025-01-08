![Ballout Live](apps/frontend/ballout-app/assets/LOGO.png)

**Ballout Live** is an app that allows you to live stream updates of basketball games, whether you're playing with friends or following college tournaments. Track the action in real time, get up-to-date scores, and enjoy an interactive experience.

## Features

- **Live Basketball Scores:** Stream live updates of games, including box-scores and play-by-plays.
- **Real-Time Interaction:** Track and interact with games played by friends or college teams.
- **Customizable Game Events:** Add your own custom games and share with friends.
- **Mobile-First Design:** Optimized for mobile viewing, with seamless navigation.
- **Coming Soon:** More sports!

## Tech Stack

- **React Native**: For building the mobile application
- **Expo**: For handling development and build processes
- **Nx**: For managing monorepo architecture and multiple apps
- **NestJS:** Microservices-based backend

## Prerequisites

Before getting started, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [Nx CLI](https://nx.dev/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/ballout-live.git
cd ballout-live
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Install and start nats-server
This is while working on the backend, for the microservices to communicate

### 4. Serve and Preview Apps
First get the list of apps in the monorepo
```bash
npx nx show projects
```

Then show all commands associated with each app
```bash
npx nx show project <project-name>
```
