# Modules

Helios top-level statements can be placed in modules and can then be imported by other Helios sources. Modules can be made available during compile-time by including them in a list as the second argument of the [`Program` constructor](../api/reference/program.md).

## `import`

An `import` statement in Helios has a syntax similar to Javascript:

```helios
import {OldName1 as NewName1, OldName2} from my_module
```

The imported names act as if the original statements were defined in the source where they are imported.

> **Note**: Currently every top-level statement is public by default and is exported, including other `import` statements.