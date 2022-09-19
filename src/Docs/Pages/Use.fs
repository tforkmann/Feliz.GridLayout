module Docs.Pages.Use

open Feliz
open Elmish
open Feliz.UseElmish
open Feliz.DaisyUI
open Feliz.DaisyUI.Operators
open Docs.SharedView

[<ReactComponent>]
let UseView () =
    React.fragment [ Html.divClassed "description" [ Html.text "After installation just open proper namespace:" ]
                     Html.divClassed "max-w-xl" [ linedMockupCode "open Feliz.GridLayout" ]
                     Html.divClassed
                         "description"
                         [ Html.text "Now you can start using library. Everything important starts with "
                           Html.code [ prop.className "code"
                                       prop.text "GridLayout.*" ]
                           Html.text " module." ]

                      ]