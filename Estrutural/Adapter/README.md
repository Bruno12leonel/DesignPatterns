# Adapter Design Pattern

O padrão de projeto Adapter é um padrão estrutural que permite que interfaces incompatíveis trabalhem juntas. Ele atua como um conversor, permitindo que classes com interfaces incompatíveis colaborem entre si.

## Exemplo

Vamos considerar um exemplo onde temos uma interface `ITarget` que nosso cliente espera usar, e uma classe `Adaptee` que possui uma funcionalidade útil, mas com uma interface incompatível.

### Interface ITarget

```csharp
public interface ITarget
{
    void Request();
}
```

### Classe Adaptee

```csharp
public class Adaptee
{
    public void SpecificRequest()
    {
        Console.WriteLine("Called SpecificRequest()");
    }
}
```

### Classe Adapter

A classe Adapter implementa a interface `ITarget` e traduz as chamadas para a interface `Adaptee`.

```csharp
public class Adapter : ITarget
{
    private readonly Adaptee _adaptee;

    public Adapter(Adaptee adaptee)
    {
        _adaptee = adaptee;
    }

    public void Request()
    {
        _adaptee.SpecificRequest();
    }
}
```

### Uso do Adapter

```csharp
class Program
{
    static void Main(string[] args)
    {
        Adaptee adaptee = new Adaptee();
        ITarget target = new Adapter(adaptee);

        target.Request();
    }
}
```

## Diagrama UML

```plaintext
+-----------+          +-----------+          +-----------+
|   Client  |          |  Adapter  |          |  Adaptee  |
+-----------+          +-----------+          +-----------+
|           | -------> |           | -------> |           |
|           |          |           |          |           |
+-----------+          +-----------+          +-----------+
```

No diagrama acima:

- O `Client` usa a interface `ITarget`.
- O `Adapter` implementa a interface `ITarget` e traduz as chamadas para a interface `Adaptee`.
- O `Adaptee` possui a funcionalidade específica que queremos usar.

## Conclusão

O padrão Adapter é útil quando precisamos integrar classes com interfaces incompatíveis. Ele permite que classes trabalhem juntas sem modificar seu código fonte, promovendo a reutilização e a flexibilidade do código.
