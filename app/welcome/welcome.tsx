import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";

export function Welcome() {
  return (
    <main className="p-12">

    <Card>
      <CardHeader>
        <CardTitle>Bem-vindo ao Sistema!</CardTitle>
        <CardDescription>
          Este é um exemplo de card utilizando os componentes shadcn UI.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Explore as funcionalidades e aproveite a experiência personalizada que preparamos para você.
        </p>
      </CardContent>
      <CardFooter>
        <span className="text-sm text-muted-foreground">
          © 2024 Sua Empresa
        </span>
      </CardFooter>
    </Card>
      
    </main>
  );
}
