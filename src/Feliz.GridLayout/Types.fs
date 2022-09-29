namespace Feliz.GridLayout

open Fable.Core

/// This interface allows us to stop adding random props to the react grid layout.
type IGridLayoutProp =
    interface
    end
type IResponsiveGridLayoutProp =
    interface
    end

type ILayout =
    interface
    end

type ILayoutProp =
    interface
    end

type IItem =
    interface
    end

type IStyleProp =
    interface
    end

type Layout =
    abstract x: int
    abstract y: int
    abstract i: string
    abstract w: int
    abstract h: int