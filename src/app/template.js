/** Re-mounts on every navigation, so this CSS fade plays for each page (no JS needed). */
export default function Template({ children }) {
  return <div className="animate-page-in">{children}</div>;
}
