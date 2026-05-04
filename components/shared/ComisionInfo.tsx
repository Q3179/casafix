interface ComisionInfoProps {
  tipo: 'B2B' | 'B2C';
}

export function ComisionInfo({ tipo }: ComisionInfoProps) {
  if (tipo === 'B2B') {
    return (
      <div className="bg-cf-section-cream border border-cf-border rounded-lg p-6">
        <h3 className="font-semibold text-cf-text mb-2">Comisión transparente</h3>
        <p className="text-sm text-cf-text/80 leading-relaxed">
          Cobramos una comisión del 10% sobre el monto del trabajo, dividida 5% al
          cliente y 5% al prestador. Sin costos ocultos, sin suscripciones.
        </p>
      </div>
    );
  }
  return (
    <div className="bg-cf-section-cream border border-cf-border rounded-lg p-6">
      <h3 className="font-semibold text-cf-text mb-2">Comisión transparente</h3>
      <p className="text-sm text-cf-text/80 leading-relaxed">
        Cobramos una comisión del 5% sobre el monto del trabajo, que paga sólo el
        cliente. El prestador no paga nada por usar la plataforma.
      </p>
    </div>
  );
}
