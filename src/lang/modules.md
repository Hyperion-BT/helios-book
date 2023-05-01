# Modules

Helios top-level statements can be placed in modules and can then be imported by other Helios sources. Modules can be made available during compile-time by including them in a list as the second argument of the [`Program` constructor](../api/reference/program.md).

## `import`

`import` statements in Helios are similar to Javascript/Typescript:

```helios
import { 
    ImportedName1 as NewName1,
    ImportedName2
} from MyModule
```

The imported names act as if the original statements were defined in the source where they are imported.

> **Note**: currently every top-level statement is public and exported by default, including other `import` statements.

### Namespace import

Entire modules can also be imported directly as a namespace.

```
import MyModule
...
MyModule::ImportedName1 ...
```

### Webpack

When using the [Webpack loader](../integrations/webpack.md) you must use relative paths instead of module names when importing:

```helios
import { 
    ImportedName1 as NewName1,
    ImportedName2
} from "<rel-path-to-module>.hl"
```

The Webpack loader currently doesn't support importing namespaces using relative paths (WiP).