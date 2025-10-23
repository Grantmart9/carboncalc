# Carbon Emissions Calculator

A modern web application for calculating and tracking company carbon emissions, rebuilt from a legacy Angular app using Next.js 15, TypeScript, Tailwind CSS, and Shadcn UI.

## Features

- **Company Dashboard**: Overview of total emissions, category breakdowns, and trends.
- **Data Entry**: Forms for entering operational data (electricity, fuel, waste, water) with real-time calculations.
- **Emission Factors Management**: Configurable emission factors for accurate calculations.
- **Reports**: Generate and view emission reports with PDF export options.
- **Settings**: Company information and preferences management.
- **Charts**: Visual representations of emission data using Recharts.
- **Responsive Design**: Works on desktop and mobile devices.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **State Management**: React Hooks + Context API
- **Forms**: React Hook Form + Zod validation
- **Charts**: Recharts
- **Authentication**: NextAuth (scaffolded)
- **Code Quality**: ESLint + Prettier

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd carbon-calc
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following:

   ```
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key
   DATABASE_URL=your-database-url (optional for Supabase)
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
carbon-calc/
├── app/                    # Next.js app directory
│   ├── dashboard/          # Dashboard pages
│   ├── emissions/          # Emissions data entry
│   ├── reports/            # Reports and PDF generation
│   ├── settings/           # Settings and preferences
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # Reusable UI components
│   └── ui/                 # Shadcn UI components
├── lib/                    # Utilities and configurations
│   ├── utils.ts            # Utility functions
│   ├── emissionsContext.tsx # Context for emissions data
│   └── emissionFactors.json # Emission factors data
├── hooks/                  # Custom React hooks
│   └── useEmissionsCalculator.ts # Emissions calculation hook
├── types/                  # TypeScript type definitions
│   └── emissions.ts        # Emission-related types
└── utils/                  # Additional utilities
```

## Usage

1. **Dashboard**: View summary cards and charts of your emissions.
2. **Emissions**: Enter operational data to calculate emissions in real-time.
3. **Reports**: View and generate reports based on your data.
4. **Settings**: Update company information and preferences.

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit changes: `git commit -m 'Add feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgments

- Built with Next.js and Shadcn UI.
- Emission factors based on standard values.
