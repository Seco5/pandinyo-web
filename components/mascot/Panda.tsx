// Panda maskotu — mobil uygulamada Lottie yerine emoji + animasyon ile temsil
// edilir (asset bağımlılığı yok). Web'de de aynı yaklaşımı koruyoruz.

type Props = {
  size?: number;
  accessory?: string; // streak rozetine göre küçük emoji
  bob?: boolean;
  suit?: boolean; // kariyer/iş teması için takım elbiseli versiyon
  dim?: boolean;
  className?: string;
};

export function Panda({
  size = 120,
  accessory,
  bob = true,
  suit = false,
  dim = false,
  className = "",
}: Props) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${bob ? "animate-bob" : ""} ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <div
        className="flex items-center justify-center rounded-full"
        style={{
          width: size,
          height: size,
          background:
            "radial-gradient(circle at 50% 35%, #FFE7A6 0%, #FFC83D 70%, #FF9F1C 100%)",
          opacity: dim ? 0.55 : 1,
          boxShadow: "0 10px 30px rgba(255,159,28,0.35)",
        }}
      >
        <span style={{ fontSize: size * 0.56, lineHeight: 1 }}>🐼</span>
      </div>

      {suit && (
        <span
          className="absolute"
          style={{ fontSize: size * 0.3, bottom: -size * 0.04, left: "50%", transform: "translateX(-50%)" }}
        >
          👔
        </span>
      )}

      {accessory && (
        <span
          className="absolute -right-1 -top-1 flex items-center justify-center rounded-full bg-surface shadow-card"
          style={{ width: size * 0.4, height: size * 0.4, fontSize: size * 0.22 }}
        >
          {accessory}
        </span>
      )}
    </div>
  );
}
