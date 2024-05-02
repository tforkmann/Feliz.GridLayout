namespace Feliz.GridLayout

open Fable.Core
open Fable.Core.JsInterop


module KeyHelper =
    let keyHelper str =
        ".$" + str

[<Erase>]
type layout =
    static member inline i (i: string): ILayoutProp =
        Interop.mkLayoutProp "i" (KeyHelper.keyHelper i)
    static member inline x (x: int): ILayoutProp =
        Interop.mkLayoutProp "x" x
    static member inline y (y: int): ILayoutProp =
        Interop.mkLayoutProp "y" y
    static member inline ``static`` (sta: bool): ILayoutProp =
        Interop.mkLayoutProp "static" sta
    static member inline w(w: int): ILayoutProp =
        Interop.mkLayoutProp "w" w
    static member inline h(h: int): ILayoutProp =
        Interop.mkLayoutProp "h" h
    static member inline minW(minW: int): ILayoutProp =
        Interop.mkLayoutProp "minW" minW
    static member inline maxW(maxW: int): ILayoutProp =
        Interop.mkLayoutProp "maW" maxW

[<Erase>]
type cols =
    static member inline lg (lg: int): IColsProp =
        Interop.mkColsProp "lg" lg
    static member inline md (md: int): IColsProp =
        Interop.mkColsProp "md" md
    static member inline sm (sm: int): IColsProp =
        Interop.mkColsProp "sm" sm
    static member inline xs (xs: int): IColsProp =
        Interop.mkColsProp "xs" xs
    static member inline xxs (xxs: int): IColsProp =
        Interop.mkColsProp "xxs" xxs

[<Erase>]
type breakpoint =
    static member inline lg (lg: int): IBreakPointProp =
        Interop.mkBreakPointProp "lg" lg
    static member inline md (md: int): IBreakPointProp =
        Interop.mkBreakPointProp "md" md
    static member inline sm (sm: int): IBreakPointProp =
        Interop.mkBreakPointProp "sm" sm
    static member inline xs (xs: int): IBreakPointProp =
        Interop.mkBreakPointProp "xs" xs
    static member inline xxs (xxs: int): IBreakPointProp =
        Interop.mkBreakPointProp "xxs" xxs

[<Erase>]
type layouts =
    static member inline lg (lg: ILayoutProp seq): ILayoutsProp =
        !!("lg" ==> lg)
    static member inline md (md: ILayoutProp seq): ILayoutsProp =
        !!("md" ==> md)
    static member inline sm (sm: ILayoutProp seq): ILayoutsProp =
        !!("sm" ==> sm)
    static member inline xs (xs: ILayoutProp seq): ILayoutsProp =
        !!("xs" ==> xs)
    static member inline xxs (xxs: ILayoutProp seq): ILayoutsProp =
        !!("xxs" ==> xxs)