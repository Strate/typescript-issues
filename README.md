```
npm i
typings install
node_modules/.bin/tsc --outDir target --pretty
```
Fails to compile:
```
3 let a = SomeClass.SomeEnum.one;
                    ~~~~~~~~

index.tsx(3,19): error TS2339: Property 'SomeEnum' does not exist on type 'typeof "/devel/src/github/Strate/typescript-issues/modules/SomeClass"'.


5 let b = <SomeClass />;
           ~~~~~~~~~

index.tsx(5,10): error TS2604: JSX element type 'SomeClass' does not have any construct or call signatures.
```
but correctly compiles if disable option ``
