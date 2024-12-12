# React Router Dom v6 Nested Route Rendering Issue

This repository demonstrates a common issue encountered when working with nested routes in React Router Dom v6.  The problem lies in how nested routes are defined and handled, particularly when combined with a wildcard catch-all route. The solution involves correctly structuring routes and utilizing the `useLocation` hook for conditional rendering to fix route rendering issues.

## Issue

The original `App.js` demonstrates a scenario where nested routes fail to render correctly. The parent route renders, but the child components are missing even though they are defined within the route structure. The wildcard route (`/*`) seems to be interfering with nested route rendering.

## Solution

The `AppSolution.js` file presents a corrected implementation that resolves the rendering issue. The solution involves a restructuring of the routes and using the `useLocation` hook to conditionally render content based on the current location. This ensures that nested routes are correctly displayed in the application.
