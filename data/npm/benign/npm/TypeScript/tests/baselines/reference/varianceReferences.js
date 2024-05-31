//// [tests/cases/compiler/varianceReferences.ts] ////

//// [varianceReferences.ts]
type NumericConstraint<Value extends number> = Value;

type VarianceConstrainedNumber<in out Value extends number> =
  NumericConstraint<Value>;

type Unconstrained<Value> = Value;

type VarianceUnconstrained<in out Value> = Unconstrained<Value>;

type Level3of3Unconstrained<Value> = Value;
type Level2of3Unconstrained<Value> = Level3of3Unconstrained<Value>;
type Level1of3Unconstrained<Value> = Level2of3Unconstrained<Value>;

type VarianceDeepUnconstrained<in out Value> = Level1of3Unconstrained<Value>;

interface Shape<Value> {
  value: Value;
}

type VarianceShape<in out Value> = Shape<Value>;

interface Level3of3Shape<Value> {
  value: Value;
}

type Level2of3Shape<Value> = Level3of3Shape<Value>;
type Level1of3Shape<Value> = Level2of3Shape<Value>;

type VarianceDeepShape<in out Value> = Level1of3Shape<Value>;


//// [varianceReferences.js]
