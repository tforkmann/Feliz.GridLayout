namespace Feliz.GridLayout

open Fable.Core.JsInterop
open Fable.Core
open Fable.React
open Feliz
type Event = Browser.Types.Event

[<Erase>]
type style =
    static member inline background(background: string) = Interop.mkAttr "background" background
    static member inline color(color: string) = Interop.mkAttr "color" color
    static member inline border(border: string) = Interop.mkAttr "border" border
    static member inline width(width: int) = Interop.mkAttr "width" width
    static member inline height(heigth: int) = Interop.mkAttr "heigth" heigth
    static member inline stroke(stroke: string) = Interop.mkAttr "stroke" stroke

[<Erase>]
type labelStyle =
    static member inline fill(fill: string) = Interop.mkAttr "fill" fill
    static member inline fontWeight(fontWeight: int) = Interop.mkAttr "fontWeight" fontWeight

[<StringEnum>]
type CompactType =
    | Horizontal
    | Vertical

type DroppingItem = {
    i: string
    w: int
    h: int
}

[<Erase>]
type GridLayout =
    /// Creates a new ReactGridLayout component.

    static member inline gridChart(props: IGridLayoutProp seq) =
        Interop.reactApi.createElement (Interop.gridlayout, createObj !!props)

    static member inline layoutElements(layoutElements: 'a array) : IGridLayoutProp = !!("layout" ==> layoutElements)
    static member inline layout props : ILayoutProp = !!(createObj !!props)

    static member inline style props : IGridLayoutProp =
        Interop.mkGridLayoutProp "style" (createObj !!props)

    static member inline className(className: string) : IGridLayoutProp =
        Interop.mkGridLayoutProp "className" className

    static member inline cols(cols: int) : IGridLayoutProp = Interop.mkGridLayoutProp "cols" cols

    static member inline rowHeight(rowHeight: int) : IGridLayoutProp =
        Interop.mkGridLayoutProp "rowHeight" rowHeight

    static member inline compactType(compactType: CompactType) : IGridLayoutProp =
        Interop.mkGridLayoutProp "compactType" compactType

    static member inline droppingItem( droppingItem:DroppingItem) : IGridLayoutProp =
        Interop.mkGridLayoutProp "droppingItem" droppingItem

    static member inline width(width: int) : IGridLayoutProp = Interop.mkGridLayoutProp "width" width

    static member inline autoSize(autoSize: bool) : IGridLayoutProp =
        Interop.mkGridLayoutProp "autoSize" autoSize

    static member inline allowOverlap(allowOverlap: bool) : IGridLayoutProp =
        Interop.mkGridLayoutProp "allowOverlap" allowOverlap

    static member inline isDraggable(isDraggable: bool) : IGridLayoutProp =
        Interop.mkGridLayoutProp "isDraggable" isDraggable
    static member inline isDropable(isDropable: bool) : IGridLayoutProp =
        Interop.mkGridLayoutProp "isDropable" isDropable
    static member inline isResizable(isResizable: bool) : IGridLayoutProp =
        Interop.mkGridLayoutProp "isResizable" isResizable
    static member inline isBounded(isBounded: bool) : IGridLayoutProp =
        Interop.mkGridLayoutProp "isBounded" isBounded
    static member inline useCSSTransforms(useCSSTransforms: bool) : IGridLayoutProp =
        Interop.mkGridLayoutProp "useCSSTransforms" useCSSTransforms
    static member inline transformScale(transformScale: int) : IGridLayoutProp =
        Interop.mkGridLayoutProp "transformScale" transformScale
    static member inline preventCollision(preventCollision: bool) : IGridLayoutProp =
        Interop.mkGridLayoutProp "preventCollision" preventCollision

    // TODO: This is not yet implemented in the gridlayout.
    // static member inline margin(margins: 'a array) : IGridLayoutProp = !!("margin" ==> margins)

    static member inline children(children: ReactElement list) =
        unbox<IGridLayoutProp> (prop.children children)

    static member inline onLayoutChange(handler: Layout [] -> unit) : IGridLayoutProp = !!("onLayoutChange" ==> handler)

// The !! below is used to "unsafely" expose a prop into an IGridLayoutProp.
[<Erase>]
type ResponsiveGridLayout =
    /// Creates a new ReactGridLayout component.

    static member inline responsiveGridChart(props: IResponsiveGridLayoutProp seq) =
        Interop.reactApi.createElement (Interop.responsiveGridlayout, createObj !!props)

    static member inline layoutElements(layoutElements: 'a array) : IResponsiveGridLayoutProp = !!("layout" ==> layoutElements)
    static member inline layout props : ILayoutProp = !!(createObj !!props)

    static member inline style props : IResponsiveGridLayoutProp =
        Interop.mkResponsiveGridLayoutProp "style" (createObj !!props)

    static member inline className(className: string) : IResponsiveGridLayoutProp =
        Interop.mkResponsiveGridLayoutProp "className" className

    static member inline cols(cols: obj) : IResponsiveGridLayoutProp = Interop.mkResponsiveGridLayoutProp "cols" cols
    static member inline breakpoints(cols: obj) : IResponsiveGridLayoutProp = Interop.mkResponsiveGridLayoutProp "breakpoints" cols

    static member inline rowHeight(rowHeight: int) : IResponsiveGridLayoutProp =
        Interop.mkResponsiveGridLayoutProp "rowHeight" rowHeight

    static member inline compactType(compactType: CompactType) : IResponsiveGridLayoutProp =
        Interop.mkResponsiveGridLayoutProp "compactType" compactType

    static member inline droppingItem( droppingItem:DroppingItem) : IResponsiveGridLayoutProp =
        Interop.mkResponsiveGridLayoutProp "droppingItem" droppingItem

    static member inline width(width: int) : IResponsiveGridLayoutProp = Interop.mkResponsiveGridLayoutProp "width" width

    static member inline autoSize(autoSize: bool) : IResponsiveGridLayoutProp =
        Interop.mkResponsiveGridLayoutProp "autoSize" autoSize

    static member inline allowOverlap(allowOverlap: bool) : IResponsiveGridLayoutProp =
        Interop.mkResponsiveGridLayoutProp "allowOverlap" allowOverlap

    static member inline isDraggable(isDraggable: bool) : IResponsiveGridLayoutProp =
        Interop.mkResponsiveGridLayoutProp "isDraggable" isDraggable
    static member inline isDropable(isDropable: bool) : IResponsiveGridLayoutProp =
        Interop.mkResponsiveGridLayoutProp "isDropable" isDropable
    static member inline isResizable(isResizable: bool) : IResponsiveGridLayoutProp =
        Interop.mkResponsiveGridLayoutProp "isResizable" isResizable
    static member inline isBounded(isBounded: bool) : IResponsiveGridLayoutProp =
        Interop.mkResponsiveGridLayoutProp "isBounded" isBounded
    static member inline useCSSTransforms(useCSSTransforms: bool) : IResponsiveGridLayoutProp =
        Interop.mkResponsiveGridLayoutProp "useCSSTransforms" useCSSTransforms
    static member inline transformScale(transformScale: int) : IResponsiveGridLayoutProp =
        Interop.mkResponsiveGridLayoutProp "transformScale" transformScale
    static member inline preventCollision(preventCollision: bool) : IResponsiveGridLayoutProp =
        Interop.mkResponsiveGridLayoutProp "preventCollision" preventCollision

    // TODO: This is not yet implemented in the gridlayout.
    // static member inline margin(margins: 'a array) : IResponsiveGridLayoutProp = !!("margin" ==> margins)

    static member inline children(children: ReactElement list) =
        unbox<IResponsiveGridLayoutProp> (prop.children children)

    static member inline onLayoutChange(handler: Layout [] -> unit) : IResponsiveGridLayoutProp = !!("onLayoutChange" ==> handler)