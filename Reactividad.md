## Reactividad

Lo primero que debemos saber es que la reactividad es un paradigma, una forma caracteristica de actuar ante cierta situcación. Que un sistema sea reactivo implica una mayor flexibilidad, un bajo acoplamiento, lo que facilita el desarrollo y escalabilidad, pues son sistemas susceptibles a los cambios.

Existen una serie de caracteristicas que deben tener los sistemas reactivos, las cuales son:

- **Responsive:** Poseen una capacidad de respuesta, donde los problemas pueden detectarse rapido y ser tratados de forma eficiente para que asi el sistema puede responder de forma eficiente, esto permite darle a los usuarios una mayor confianza y asi incentivar el uso del sistema.

- **Resiliente:** Todo sistema reactivo debe funcionar incluso cuando existan errores, debe mantenerse receptivo. Al estar los sistemas compuestos por componentes, las fallas se presentan de forma independiente dentro de cada uno de ellos, lo que permite que ciertan partes puedan fallar y recuperarse sin comprometer el funcionamiento total del sistema.

- **Escalable:** El sistema debe estar en capacidad de crecer sin problemas, es receptivo a carga de trabajo que cambian en cualquier momento. Debe tener la capacidad de replicar o fragmentar componentes y distribuir las entradas entre todos ellos. Estos sistemas generalente admiten algoritmos de escalado.

- **Arquitectura basada en mensajes:** Los sistemas reactivos se caracterizan por tener una comunicación a traves del paso de mensajes asincronicos, donde existe una transparencia en la ubicación del destinatario. Esto permite tener un mejor flujo de mensajes, donde se supervisa la cola de mensajes que existe en el sistema. Estas comunicaciones son impulsadas por eventos.

Los puntos importantes de la reactividad son:

1. **Effect:** Es todo aquello que efectúa un cambio en la aplicación.

2. **Track:** Siguen las dependencias dinámicas y sus efectos. Es decir, se mantiene es el acto de dar seguimiento a aquellas variables que producen el efecto, para que si una cambia, el efecto se vuelva a calcular.

3. **Trigger:** Son los disparadores de los efectos de las dependencias. Es esa acción que se ejecuta después de que el track detectó un cambio para poder actualizar el effect.

## Otros conceptos importantes:

- **Reflect:** Sistema que Refleja los comportamientos de trampas en un proxy.
