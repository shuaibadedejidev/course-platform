export function AuthVisual() {
  return (
    <aside className="auth-visual" aria-label="A little room for what’s next">
      <div className="auth-visual-glow" />
      <div className="auth-visual-orbit auth-visual-orbit-one" />
      <div className="auth-visual-orbit auth-visual-orbit-two" />
      <div className="auth-visual-earth" aria-hidden="true">
        <div className="auth-visual-earth-shade" />
      </div>
      <div className="auth-visual-copy">
        <span className="auth-visual-kicker">YOUR NEXT CHAPTER</span>
        <p>Small steps.<br /><span>Lasting momentum.</span></p>
        <span className="auth-visual-caption">
          Thoughtful learning, at your own pace.
        </span>
      </div>
      <div className="auth-visual-note">
        <span className="auth-visual-note-icon" aria-hidden="true">✳</span>
        <span>Pick up wherever you left off</span>
      </div>
    </aside>
  );
}
