import Image from "next/image";
import logoUE from '../../../../../public/img/logos/Poziomy_podstawowy_kolorowy.jpg'
// ===================================================================

// ===================================================================

export default function Toplogo() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Image
        src={logoUE}
        alt="logo"
        sizes="90vw"
        style={{
          width: '100%',
          height: 'auto',
          maxWidth: '1000px',
        }} />

    </div>
  );
}
