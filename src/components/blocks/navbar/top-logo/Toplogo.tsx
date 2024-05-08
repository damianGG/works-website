import Image from "next/image";
// ===================================================================

// ===================================================================

export default function Toplogo() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Image src="/gorna_belka.jpg" alt="logo" width={700} height={60} sizes="(max-width: 768px) 100vw, 33vw" />
    </div>
  );
}
