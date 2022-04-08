const edit_icon_data = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGPSURBVFiF7dbPSxVRFMDxjz3bVeBC9wm2EVy80hatUxE0AvtT/DfctXRZgaAL3ZmEbqqNqBG4FddJ2Q8iLV+LuQ/Gxx3fvHnXVwsPHObHOXe+X5jh3KF3MYwVHOEdnvSQbQKf0WjJ+V7A7xfAG9jrhcAQPhYIfL1K8ASm20hs9eUWTGESt0oCzmUf1WakVsfr8Kx5rAeJNxgNPad4BDW8iNiVyU8F8ONczy/MhtogPoR7c80FCxXhDbxqA49JDOFxftFhaDrGQwyUzDsl4TGJC/EnNKzGiiWjHbwpEB0+zYblfwHvVqBreDcCSeBVBZLBqwiM40sJePSLTyGwmRLeqUCf4p2tCZ9rWbMomzWTKQRGOoTDWai/jD3wRgloPh4U3D/FM6xFav0tx64E6i3Xv7GPpwXwthG1uiTeYwm72Anwn1XAVQVWQiaLTl9B8rgWuBb4LwR+hPO7slmfMoZz599jDf3YxoxszG7jIBG85uIGtFXUOIZvqv+al8m3uHmZ7T1syGZ7SvAJnuN2EfgvF/YIN5MQgwwAAAAASUVORK5CYII=";
const visible_icon_data = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHnSURBVFiF7dY7axVRFAXg76qJ2mkTuGgff4EgasTGB6IIms7CwicmpSgBH4XmH/hIML/ASluxNAZsjOD7VVv5SNIE9VqcPdxJMpM7kwhp7oIDw6y91z5z1jn7DF100cUao1Ejdh124yh2oh9bgvuBd3iBx5jE3/81yY24iK9oVRxfcAG9qy0+gLc54fe4hQNoYlOMZry7jQ+5+DfYu5LCDYzgTwi9lJa+imUNHMN05P7G1Yq5SF4/yCWPYMOiAqfxHLMxnuHUoiI9uBYaLYyHdkfcj4RfOFjATyj3fqwg/jBmgr/bqfhwBM4q9m4w+DlckrxvxvNccCcK8vbl+OGy4jswLx2fIhF4EiJDBdxQcE9LcgdDez5qLcHNEJgomyG+RUxfAdcX3M9l8jP7bmQvKm2Kmli/0sS8BSdLYqpYMFWSm7egv2wS+U04UCLSaROeKcjbn+OLJr8A9yJwRjpCi7HcMXxoqa1H4oNauNOpuBAY125E16WmkiFrRJPajWgK5yz0v0fa2Fk3HVOjGzZwRbuLTUvttWorPo5XuY+4XKd4HnukCyVb4k8YxSFsw+YY2yW7RvE5F/9ausJXhV6cj+JVr+OPOKvCdVxnWRrYJVmR/ZBsDe679g/JI2lPtGpod9FFF2uHf5RApdmV6YqPAAAAAElFTkSuQmCC";
const invisible_icon_data = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKnSURBVFiF7dbNa5VHFAbwX3JNTRMtEvFSiBYXutD6tSlFEF0kxbRboZv+CU1odCkiIqigiOI/IHQnLQWxUFAiaBfiF7XGjy4KGq34gRKkEIOavC5mXu7k9b03N7GYRX3gJTcz85znzDlzzgwf8D9CFVdxYa7EbyDDpfctvgTDUfw2Pp2toXn4CkdwHo8xjpd4iis4ju/QFTnVRHw4OjNjtGE77kdDzXwv8ON/Id6HvxLDd3E0jq/CAnRiJTZjp5DjyYQzhs9mKlzBocTITWxDSxPcasHpDNewolnxTvwWia+wKzqUYz4GcVk4A+O4iAF0mxr2HtyK/z/FhunEP8ZQQthUmF+G6+rn/lUiXo2cDpxMbK6tJ96KU3HhP0KOU7Qn4veElCwUTvxAwYnuArcNJ+L831hU5sDeuOAZPi+ZH0zEu5LxtNTy7/sSfrvQBTP8XJzciAnh9H5d5p2Q80zYeZn4sFok6rXbpXge1/SlE3/GwYN1iIRyyoSwl4lXhchk+LeBnf6EozUOZvHvZANijrYoNoQ1Qo/vwRMhitNheZnWF8LhmcDWOsSL0dEBb+88x7cap+CbKPwaXxYnd0fyc6wvIacnvUx8sVq77i/hr8NonN9d5l0LfooLHpY4sVStzvNIdOETYee5+DV8VOCuiTYz/KJBR+3AmbhwFL1xPD1wqRPF74/oaIrNQmlnOC2UY0O049dIeI19pua8W6jzC0JljMXf/YWdz8OeaCOLNjumE89RwQFTb7VHmntMtAgpyS+kSexXq7imUcWIqSG+I/SKPiHU7UJfWC2c8GNCp0xv0d6i4WbF07DviOLNPkhG8IPQM95ZPC+1CrYIETiLB0L+XwjpOYfDQlOqmCWWqN147/SAnC2uKG8y7w2/C2+6ORH/gDnBG7XZ/CpJnOBoAAAAAElFTkSuQmCC";
const css = (_uiid, _stroke, _strokeLine, _imgWidth, _imgHeight, _visiblity, _selected) => 
           `div.lpa-area-container
            {
                position: relative;
                white-space: normal;
            }
            img.canvas-image-${_uiid}
            {
                position: relative;
                width: ${_imgWidth}px;
                height: ${_imgHeight}px;
                cursor: default;
            }
            svg.area-${_uiid}
            {
                position: absolute;
                left: 0;
                top: 0;
                width: ${_imgWidth}px;
                height: ${_imgHeight}px;
                max-width: 100%;
                stroke-linejoin:round;
                pointer-events: none;
                opacity: ${_visiblity ? 1 : 0};
                transition: 0.2s;
            }
            svg.area-${_uiid}:hover
            {
                opacity: 1;
            }
            svg.area-${_uiid} > polygon.strokeOutline
            {
                stroke-width:${_stroke + 2 * _strokeLine};
                stroke:black;
            }
            svg.area-${_uiid} > polygon.stroke
            {
                stroke-width:${_stroke};
                fill:none;
            }
            svg.area-${_uiid} > polygon
            {
                pointer-events: auto;
                cursor: pointer;
            }`
            +
            (_selected !== "" ?
            `#${_selected}
            {
                opacity: 1;
            }` : "")
            +
            `button.edit-${_uiid}
            {
                position: absolute;
                top: 0;
                right: -35px;
                width: 30px;
                height: 30px;
                border: 0;
                background-color: rgba(255, 255, 255, 0);
                opacity: 0;
                transition: 0.4s;
            }
            button.edit-${_uiid} > img
            {
                position: absolute;
                top: 0;
                left: 0;
                width: 30px;
                height: 30px;
                box-shadow: none;
                filter: drop-shadow(1px 0 0 white)
                        drop-shadow(-1px 0 0 white)
                        drop-shadow(0 1px 0 white)
                        drop-shadow(0 -1px 0 white);
            }
            button.visible-${_uiid}
            {
                position: absolute;
                top: 40px;
                right: -35px;
                width: 30px;
                height: 30px;
                border: 0;
                background-color: rgba(255, 255, 255, 0);
                opacity: 0;
                transition: 0.4s;
            }
            button.visible-${_uiid} > img
            {
                position: absolute;
                top: 0;
                left: 0;
                width: 30px;
                height: 30px;
                box-shadow: none;
                filter: drop-shadow(1px 0 0 white)
                        drop-shadow(-1px 0 0 white)
                        drop-shadow(0 1px 0 white)
                        drop-shadow(0 -1px 0 white);
            }
            img.canvas-image-${_uiid}:hover ~ button
            {
                opacity: 1;
            }
            button.edit-${_uiid}:hover
            {
                opacity: 1;
            }
            button.visible-${_uiid}:hover
            {
                opacity: 1;
            }
            `;