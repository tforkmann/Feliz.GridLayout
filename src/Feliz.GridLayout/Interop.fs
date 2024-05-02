namespace Feliz.GridLayout

open Fable.Core
open Fable.Core.JsInterop

[<Erase; RequireQualifiedAccess>]
module Interop =
    let inline mkStyleProp (key: string) (value: obj) : IStyleProp = unbox (key, value)
    let inline mkGridLayoutProp (key: string) (value: obj) : IGridLayoutProp = unbox (key, value)
    let inline mkResponsiveGridLayoutProp (key: string) (value: obj) : IResponsiveGridLayoutProp = unbox (key, value)
    let inline mkLayoutProp (key: string) (value: obj) : ILayoutProp = unbox (key, value)
    let inline mkColsProp (key: string) (value: obj) : IColsProp = unbox (key, value)
    let inline mkBreakPointProp (key: string) (value: obj) : IBreakPointProp = unbox (key, value)
    let inline mkLayoutsProp (key: string) (value: obj) : ILayoutsProp = unbox (key, value)

    let gridLayout : obj = importDefault "react-grid-layout"
    let gridItem : obj = importDefault "react-grid-layout"
    let layout : obj = importDefault "react-grid-layout"
    let responsive : obj = import "Responsive" "react-grid-layout"
    let widthProvider : obj -> obj = import "WidthProvider" "react-grid-layout"
    let responsiveGridLayout = widthProvider responsive