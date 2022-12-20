# PATRONES DE DISEÑO

Los patrones de diseño pueden ser:

- Creacional: [Singleton, Builder]
- Estructura: [Decorator]
- Comportamiento: [Strategy, Observer, State]

Strategy: Tener comportamientos distintos en un objeto y agregar nuevos
          comportamientos sin modificar el contexto inicial. Es uno de los mas usados

          Contexto: Es el objeto central que va a unificar

Observer: Teniendo un objeto, este objeto puede tener estados las cuales son las
          propiedades o campos de la clase, cuando estos cambien, se notifica a un conjunto
          de observadores, el objeto clave es el subject

Decorator: Como están estructuradas las clases, como se conforman unas con otras, soluciona
           cuando queremos agregar funcionalidad por jerarquía

Builder: Es un patron de diseño creacional, nos ayuda a crear un objeto
         Ejm: - Un objeto que tiene muchos elementos en su construcción, (un constructor
         enorme), separa el constructor en un conjunto de métodos encadenados, estos métodos
         se pueden invocar o no (dependiendo la construcción del objeto)
