module Index

open System
open Elmish
open Fable.React
open Feliz
open Feliz.GridLayout
open Browser.Dom
open Fable.React

type Model = { Txt: string }

type Msg = UpdateTxt of string

let init () = { Txt = "" }, Cmd.none

let update msg (model: Model) =
    match msg with
    | UpdateTxt txt -> { model with Txt = txt }, Cmd.none

let normalLayouts = [|
    GridLayout.layout [
        layout.i "1"
        layout.x 0
        layout.y 0
        layout.w 2
        layout.h 3
        layout.minW 2
        layout.maxW 3
    ]
    GridLayout.layout [
        layout.i "2"
        layout.x 2
        layout.y 0
        layout.w 2
        layout.h 3
        layout.minW 2
        layout.maxW 3
    ]

    GridLayout.layout [
        layout.i "3"
        layout.x 4
        layout.y 0
        layout.w 2
        layout.h 3
        layout.minW 2
        layout.maxW 3
    ]

    GridLayout.layout [
        layout.i "4"
        layout.x 6
        layout.y 0
        layout.w 2
        layout.h 3
        layout.minW 2
        layout.maxW 3
    ]

    GridLayout.layout [
        layout.i "5"
        layout.x 2
        layout.y 0
        layout.w 2
        layout.h 3
        layout.minW 2
        layout.maxW 3
    ]

    GridLayout.layout [
        layout.i "f"
        layout.x 8
        layout.y 0
        layout.w 2
        layout.h 3
        layout.minW 2
        layout.maxW 3
    ]

|]

[<ReactComponent>]
let GridLayoutChart () =
    GridLayout.gridChart [
        GridLayout.layoutElements normalLayouts
        GridLayout.className "layout"
        GridLayout.cols 24
        GridLayout.autoSize false
        GridLayout.isDraggable true
        GridLayout.compactType Vertical
        GridLayout.preventCollision true
        GridLayout.rowHeight 30
        GridLayout.onLayoutChange (fun layout ->
            console.log layout

            for e in layout do
                console.log e.x
                console.log e.y
                console.log e.i
                console.log e.w
                console.log e.h)
        GridLayout.width 1200
        GridLayout.children [
            Html.div [
                prop.key "a"
                prop.children [
                    Html.h1 "Texta"
                    Html.h2 "Texta"
                    Html.h3 "Texta"
                    Html.h4 "Texta"
                    Html.h5 "Texta"
                ]
            ]
            Html.div [ prop.key "b"; prop.text "Textb" ]
            Html.div [ prop.key "c"; prop.text "Textc" ]
            Html.div [ prop.key "d"; prop.text "Textd" ]
            Html.div [ prop.key "e"; prop.text "TextE" ]

        ]
    ]


//     |]
//     md = [|
//         GridLayout.layout [
//             layout.i "1"
//             layout.x 0
//             layout.y 0
//             layout.w 2
//             layout.h 3
//             layout.minW 2
//             layout.maxW 3
//         ]
//         GridLayout.layout [
//             layout.i "2"
//             layout.x 2
//             layout.y 0
//             layout.w 2
//             layout.h 3
//             layout.minW 2
//             layout.maxW 3
//         ]

//         GridLayout.layout [
//             layout.i "3"
//             layout.x 4
//             layout.y 0
//             layout.w 2
//             layout.h 3
//             layout.minW 2
//             layout.maxW 3
//         ]

//         GridLayout.layout [
//             layout.i "4"
//             layout.x 6
//             layout.y 0
//             layout.w 2
//             layout.h 3
//             layout.minW 2
//             layout.maxW 3
//         ]

//         GridLayout.layout [
//             layout.i "5"
//             layout.x 8
//             layout.y 0
//             layout.w 2
//             layout.h 3
//             layout.minW 2
//             layout.maxW 3
//         ]
//     |]
//     xs = [|
//         GridLayout.layout [
//             layout.i "1"
//             layout.x 0
//             layout.y 0
//             layout.w 2
//             layout.h 3
//             layout.minW 2
//             layout.maxW 3
//         ]
//         GridLayout.layout [
//             layout.i "2"
//             layout.x 0
//             layout.y 3
//             layout.w 2
//             layout.h 3
//             layout.minW 2
//             layout.maxW 3
//         ]

//         GridLayout.layout [
//             layout.i "3"
//             layout.x 0
//             layout.y 6
//             layout.w 2
//             layout.h 3
//             layout.minW 2
//             layout.maxW 3
//         ]

//         GridLayout.layout [
//             layout.i "4"
//             layout.x 0
//             layout.y 9
//             layout.w 2
//             layout.h 3
//             layout.minW 2
//             layout.maxW 3
//         ]

//         GridLayout.layout [
//             layout.i "5"
//             layout.x 0
//             layout.y 12
//             layout.w 2
//             layout.h 3
//             layout.minW 2
//             layout.maxW 3
//         ]
//     |]
//     xxs = [|
//         GridLayout.layout [
//             layout.i "1"
//             layout.x 0
//             layout.y 0
//             layout.w 2
//             layout.h 3
//             layout.minW 2
//             layout.maxW 3
//         ]
//         GridLayout.layout [
//             layout.i "2"
//             layout.x 0
//             layout.y 3
//             layout.w 2
//             layout.h 3
//             layout.minW 2
//             layout.maxW 3
//         ]

//         GridLayout.layout [
//             layout.i "3"
//             layout.x 0
//             layout.y 6
//             layout.w 2
//             layout.h 3
//             layout.minW 2
//             layout.maxW 3
//         ]

//         GridLayout.layout [
//             layout.i "4"
//             layout.x 0
//             layout.y 9
//             layout.w 2
//             layout.h 3
//             layout.minW 2
//             layout.maxW 3
//         ]

//         GridLayout.layout [
//             layout.i "5"
//             layout.x 0
//             layout.y 12
//             layout.w 2
//             layout.h 3
//             layout.minW 2
//             layout.maxW 3
//         ]
//     |]

// |}

[<ReactComponent>]
let ResponsiveGridLayoutChart () =
    ResponsiveGridLayout.responsiveGridChart [
        ResponsiveGridLayout.responsiveLayouts [
            layouts.lg [
                GridLayout.layout [
                    layout.i "1"
                    layout.x 0
                    layout.y 0
                    layout.w 2
                    layout.h 3
                    layout.minW 2
                    layout.maxW 3
                ]
                GridLayout.layout [
                    layout.i "2"
                    layout.x 2
                    layout.y 0
                    layout.w 2
                    layout.h 3
                    layout.minW 2
                    layout.maxW 3
                ]

                GridLayout.layout [
                    layout.i "3"
                    layout.x 4
                    layout.y 0
                    layout.w 2
                    layout.h 3
                    layout.minW 2
                    layout.maxW 3
                ]

                GridLayout.layout [
                    layout.i "4"
                    layout.x 6
                    layout.y 0
                    layout.w 2
                    layout.h 3
                    layout.minW 2
                    layout.maxW 3
                ]

                GridLayout.layout [
                    layout.i "5"
                    layout.x 8
                    layout.y 0
                    layout.w 2
                    layout.h 3
                    layout.minW 2
                    layout.maxW 3
                ]
            ]
            layouts.sm [
                GridLayout.layout [
                    layout.i "1"
                    layout.x 0
                    layout.y 0
                    layout.w 2
                    layout.h 3
                    layout.minW 2
                    layout.maxW 3
                ]
                GridLayout.layout [
                    layout.i "2"
                    layout.x 2
                    layout.y 0
                    layout.w 2
                    layout.h 3
                    layout.minW 2
                    layout.maxW 3
                ]

                GridLayout.layout [
                    layout.i "3"
                    layout.x 4
                    layout.y 0
                    layout.w 2
                    layout.h 3
                    layout.minW 2
                    layout.maxW 3
                ]

                GridLayout.layout [
                    layout.i "4"
                    layout.x 6
                    layout.y 0
                    layout.w 2
                    layout.h 3
                    layout.minW 2
                    layout.maxW 3
                ]

                GridLayout.layout [
                    layout.i "5"
                    layout.x 8
                    layout.y 0
                    layout.w 2
                    layout.h 3
                    layout.minW 2
                    layout.maxW 3
                ]
            ]
            layouts.xxs [
                GridLayout.layout [
                    layout.i "1"
                    layout.x 0
                    layout.y 0
                    layout.w 2
                    layout.h 3
                    layout.minW 2
                    layout.maxW 3
                ]
                GridLayout.layout [
                    layout.i "2"
                    layout.x 0
                    layout.y 3
                    layout.w 2
                    layout.h 3
                    layout.minW 2
                    layout.maxW 3
                ]

                GridLayout.layout [
                    layout.i "3"
                    layout.x 0
                    layout.y 6
                    layout.w 2
                    layout.h 3
                    layout.minW 2
                    layout.maxW 3
                ]

                GridLayout.layout [
                    layout.i "4"
                    layout.x 0
                    layout.y 9
                    layout.w 2
                    layout.h 3
                    layout.minW 2
                    layout.maxW 3
                ]

                GridLayout.layout [
                    layout.i "5"
                    layout.x 0
                    layout.y 12
                    layout.w 2
                    layout.h 3
                    layout.minW 2
                    layout.maxW 3
                ]
            ]
        ]
        ResponsiveGridLayout.className "layout"
        ResponsiveGridLayout.breakpoints [
            breakpoint.lg 1200
            breakpoint.md 996
            breakpoint.sm 768
            breakpoint.xs 600
            breakpoint.xxs 0
        ]
        ResponsiveGridLayout.cols [ cols.lg 12; cols.md 10; cols.sm 6; cols.xs 2; cols.xxs 1 ]
        // ResponsiveGridLayout.autoSize true
        // ResponsiveGridLayout.isDraggable true
        // ResponsiveGridLayout.compactType Horizontal
        // ResponsiveGridLayout.preventCollision true
        ResponsiveGridLayout.rowHeight 30
        ResponsiveGridLayout.onLayoutChange (fun layout ->
            console.log layout

            for e in layout do
                console.log e.x
                console.log e.y
                console.log e.i
                console.log e.w
                console.log e.h)
        ResponsiveGridLayout.children [
            Html.div [
                prop.style [ Feliz.style.backgroundColor "red" ]
                prop.key "1"
                prop.text "1"
            ]
            Html.div [
                prop.style [ Feliz.style.backgroundColor "green" ]
                prop.key "2"
                prop.text "2"
            ]
            Html.div [
                prop.style [ Feliz.style.backgroundColor "yellow" ]
                prop.key "3"
                prop.text "3"
            ]
            Html.div [
                prop.style [ Feliz.style.backgroundColor "blue" ]
                prop.key "4"
                prop.text "4"
            ]
            Html.div [
                prop.style [ Feliz.style.backgroundColor "pink" ]
                prop.key "5"
                prop.text "5"
            ]

        ]
    ]

let view (model: Model) (dispatch: Msg -> unit) =
    Html.div [ prop.children [ ResponsiveGridLayoutChart() ] ]