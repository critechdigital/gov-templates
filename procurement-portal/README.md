# Public Bidding and Procurement Portal

A React-based government website template for Philippine Local Government Units (LGUs) compliant with RA 9184 (Government Procurement Reform Act) and RA 12009.

## Overview

This procurement portal provides a complete solution for transparent government procurement activities, featuring bid opportunity listings, contract awards tracking, BAC composition, procurement planning, and supplier registration.

## Features

### 📋 Core Pages

1. **Homepage** - Overview dashboard with active opportunities, recent awards, and announcements
2. **Bid Opportunities** - Searchable and filterable list of procurement projects
3. **Bid Detail** - Complete procurement information with timeline and requirements
4. **Awarded Contracts** - Contract awards with budget vs. actual amount comparison
5. **BAC Composition** - Bids and Awards Committee member directory
6. **Procurement Plan** - Annual Procurement Plan with budget breakdowns
7. **Supplier Registration** - Multi-step registration form for prospective suppliers

### 🎯 Key Features

- **RA 9184 & RA 12009 Compliance** - Follows Philippine procurement laws
- **Responsive Design** - Mobile-friendly interface
- **Government Branding** - Professional blue theme (#0038A8)
- **Search & Filtering** - Easy navigation and discovery
- **Print-Friendly Views** - Optimized for document printing
- **Status Tracking** - Real-time bid status with countdown timers
- **Document Management** - Placeholder for bid document downloads

### 📊 Mock Data

- **LGU**: Provincial Government of Bulacan
- **25+ Active Opportunities** across Goods, Infrastructure, and Consulting Services
- **30+ Awarded Contracts** (2025-2026)
- **Budget Range**: ₱50,000 to ₱50,000,000
- **Complete BAC Structure** (9 members including observers)
- **40+ Procurement Plan Items** with quarterly distribution
- **Realistic Project Names** for Philippine infrastructure

### 🛠 Technology Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with @tailwindcss/vite
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Charts**: Recharts (for future analytics)
- **UI Components**: Radix UI primitives
- **Date Handling**: date-fns

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development

```bash
# Run linting
npm run lint

# Type checking
npm run type-check

# Build and preview
npm run build && npm run preview
```

## Project Structure

```
src/
├── components/
│   └── Layout.tsx          # Main application layout
├── data/
│   └── mockData.ts         # Sample data and type definitions
├── pages/
│   ├── Homepage.tsx        # Dashboard overview
│   ├── BidOpportunities.tsx # Procurement listings
│   ├── BidDetail.tsx       # Individual opportunity details
│   ├── AwardedContracts.tsx # Contract awards
│   ├── BACComposition.tsx  # Committee information
│   ├── ProcurementPlan.tsx # Annual procurement plan
│   └── SupplierRegistration.tsx # Vendor registration
├── App.tsx                 # Main app component with routing
├── main.tsx                # Application entry point
└── index.css               # Global styles and Tailwind imports
```

## Customization

### Branding

Update the primary color and organization details in:
- `src/index.css` - CSS custom properties
- `src/components/Layout.tsx` - Header and footer content
- `src/data/mockData.ts` - Sample data and organization name

### Content

Replace mock data in `src/data/mockData.ts` with real procurement data:
- Bid opportunities
- Awarded contracts
- BAC member information
- Procurement plan items

### Features

The portal supports easy extension with additional pages:
- Vendor management
- Analytics dashboard
- Document management
- Notification system
- Integration with PhilGEPS

## Legal Compliance

This template is designed to support compliance with:

- **RA 9184** - Government Procurement Reform Act
- **RA 12009** - Amendment to RA 9184  
- **IRR-A** - Implementing Rules and Regulations
- **GPPB Guidelines** - Government Procurement Policy Board

## License

MIT License - See LICENSE file for details.

## Support

For technical support or customization requests, contact CriTech Digital Solutions.

---

*Built with ❤️ for Philippine Local Government Units*