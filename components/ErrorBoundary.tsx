'use client';

import React, { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="flex flex-col items-center justify-center min-h-[400px] px-6 text-center animate-fade-in">
          <div className="w-16 h-16 bg-gradient-to-r from-pink to-purple-400 rounded-full flex items-center justify-center mb-6 shadow-card">
            <span className="text-2xl">💔</span>
          </div>
          <h2 className="text-xl font-bold text-textPrimary mb-3">
            Something went wrong
          </h2>
          <p className="text-textSecondary mb-6 max-w-md leading-relaxed">
            We encountered an unexpected error. Your safety and privacy remain protected. 
            Please try refreshing the page or return to group selection.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-gradient-to-r from-pink to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-card-hover focus:outline-none focus:ring-2 focus:ring-pink focus:ring-offset-2 focus:ring-offset-bg transition-all duration-200 transform hover:scale-105"
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}