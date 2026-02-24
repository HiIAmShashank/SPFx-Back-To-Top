# Back to Top Web Part

A lightweight SharePoint Framework (SPFx) web part that adds a floating back-to-top button to your SharePoint pages. When users scroll down, a floating action button appears that smoothly scrolls the page back to the top on click.

## Used SharePoint Framework Version

![SPFx](https://img.shields.io/badge/SPFx-1.22.2-green.svg)
![Node.js](https://img.shields.io/badge/Node.js-v22-green.svg)
![React](https://img.shields.io/badge/React-17-blue.svg)
![Fluent UI](https://img.shields.io/badge/Fluent%20UI-8-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## Applies to

- [SharePoint Framework](https://aka.ms/spfx)
- [Microsoft 365 tenant](https://docs.microsoft.com/sharepoint/dev/spfx/set-up-your-developer-tenant)

> Get your own free development tenant by subscribing to [Microsoft 365 developer program](http://aka.ms/o365devprogram)

## Supported Hosts

- SharePoint Online (Full-width and Web Part)
- Microsoft Teams (Personal App and Tab)

## Prerequisites

- Node.js v22.14.0+
- [Heft CLI](https://heft.rushstack.io/) (`npm install -g @rushstack/heft`)

## Solution

| Solution | Author(s) |
| -------- | --------- |
| back-to-top | [Shashank Gupta](https://github.com/HiIAmShashank) |

## Version history

| Version | Date | Comments |
| ------- | ---- | -------- |
| 1.0.0 | March 2, 2026 | Initial release |

## Disclaimer

**THIS CODE IS PROVIDED _AS IS_ WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Minimal Path to Awesome

1. Clone this repository
2. Navigate to the solution folder
3. Run the following commands:

```bash
npm install
```

4. Update `{tenantDomain}` in `config/serve.json` with your SharePoint tenant domain
5. Start the local dev server:

```bash
heft start --clean
```

6. Open the SharePoint Workbench and add the **Back To Top** web part to the page

### Build & Package

```bash
# Run tests and build the .sppkg package
npm run build
```

The packaged solution is output to `sharepoint/solution/back-to-top.sppkg`. Upload it to your SharePoint App Catalog to deploy.

## Features

- Floating action button that appears after scrolling 300px down the page
- Smooth scroll-to-top animation on click
- Works with SharePoint's native scroll containers (`data-is-scrollable`)
- Hover animation with scale effect and shadow elevation
- Theme-aware styling using SharePoint theme variables
- Tooltip on hover for accessibility
- Supports SharePoint Online, Microsoft Teams, and Viva Connections

## References

- [Getting started with SharePoint Framework](https://docs.microsoft.com/sharepoint/dev/spfx/set-up-your-developer-tenant)
- [Building for Microsoft Teams](https://docs.microsoft.com/sharepoint/dev/spfx/build-for-teams-overview)
- [Publish SharePoint Framework applications to the Marketplace](https://docs.microsoft.com/sharepoint/dev/spfx/publish-to-marketplace-overview)
- [Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp)
- [Heft Documentation](https://heft.rushstack.io/)
