import { Component, type ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

// An error boundary has to be a class, and a class cannot call hooks, so the
// fallback renders through its own component.
function ErrorFallback({
  message,
  onRetry,
}: {
  message: string;
  onRetry: () => void;
}) {
  const { t } = useTranslation();

  return (
    <div className="flex h-full items-center justify-center p-4">
      <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-center">
        <div className="mb-2 text-lg">
          {t("components.atoms.errorboundary.something_went_wrong")}
        </div>
        <div className="text-sm text-text-muted">
          {message || t("components.atoms.errorboundary.unknown_error")}
        </div>
        <button
          className="mt-3 rounded bg-primary px-3 py-1 text-sm text-white"
          onClick={onRetry}
        >
          {t("components.atoms.errorboundary.try_again")}
        </button>
      </div>
    </div>
  );
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <ErrorFallback
            message={this.state.error?.message ?? ""}
            onRetry={() => this.setState({ hasError: false, error: null })}
          />
        )
      );
    }

    return this.props.children;
  }
}
