'use strict';

Component({
    externalClasses: ['i-class'],

    properties: {
        // default, primary, ghost, info, success, warning, error
        type: {
            type: String,
            value: ''
        },
        // default, large, small
        size: {
            type: String,
            value: ''
        },
        // circle, square
        shape: {
            type: String,
            value: 'square'
        },
        disabled: {
            type: Boolean,
            value: false
        },
        loading: {
            type: Boolean,
            value: false
        },
        long: {
            type: Boolean,
            value: false
        },
        openType: String,
        appParameter: String,
        hoverStopPropagation: Boolean,
        hoverStartTime: {
            type: Number,
            value: 20
        },
        hoverStayTime: {
            type: Number,
            value: 70
        },
        lang: {
            type: String,
            value: 'en'
        },
        sessionFrom: {
            type: String,
            value: ''
        },
        sendMessageTitle: String,
        sendMessagePath: String,
        sendMessageImg: String,
        showMessageCard: Boolean
    },

    methods: {
        handleTap: function handleTap() {
            if (this.data.disabled) return false;

            this.triggerEvent('click');
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInByb3BlcnRpZXMiLCJ0eXBlIiwiU3RyaW5nIiwidmFsdWUiLCJzaXplIiwic2hhcGUiLCJkaXNhYmxlZCIsIkJvb2xlYW4iLCJsb2FkaW5nIiwibG9uZyIsIm9wZW5UeXBlIiwiYXBwUGFyYW1ldGVyIiwiaG92ZXJTdG9wUHJvcGFnYXRpb24iLCJob3ZlclN0YXJ0VGltZSIsIk51bWJlciIsImhvdmVyU3RheVRpbWUiLCJsYW5nIiwic2Vzc2lvbkZyb20iLCJzZW5kTWVzc2FnZVRpdGxlIiwic2VuZE1lc3NhZ2VQYXRoIiwic2VuZE1lc3NhZ2VJbWciLCJzaG93TWVzc2FnZUNhcmQiLCJtZXRob2RzIiwiaGFuZGxlVGFwIiwiZGF0YSIsInRyaWdnZXJFdmVudCJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsVUFBVTtBQUNOQyxxQkFBaUIsQ0FBQyxTQUFELENBRFg7O0FBR05DLGdCQUFZO0FBQ1I7QUFDQUMsY0FBTTtBQUNGQSxrQkFBTUMsTUFESjtBQUVGQyxtQkFBTztBQUZMLFNBRkU7QUFNUjtBQUNBQyxjQUFNO0FBQ0ZILGtCQUFNQyxNQURKO0FBRUZDLG1CQUFPO0FBRkwsU0FQRTtBQVdSO0FBQ0FFLGVBQU87QUFDSEosa0JBQU1DLE1BREg7QUFFSEMsbUJBQU87QUFGSixTQVpDO0FBZ0JSRyxrQkFBVTtBQUNOTCxrQkFBTU0sT0FEQTtBQUVOSixtQkFBTztBQUZELFNBaEJGO0FBb0JSSyxpQkFBUztBQUNMUCxrQkFBTU0sT0FERDtBQUVMSixtQkFBTztBQUZGLFNBcEJEO0FBd0JSTSxjQUFNO0FBQ0ZSLGtCQUFNTSxPQURKO0FBRUZKLG1CQUFPO0FBRkwsU0F4QkU7QUE0QlJPLGtCQUFVUixNQTVCRjtBQTZCUlMsc0JBQWNULE1BN0JOO0FBOEJSVSw4QkFBc0JMLE9BOUJkO0FBK0JSTSx3QkFBZ0I7QUFDWlosa0JBQU1hLE1BRE07QUFFWlgsbUJBQU87QUFGSyxTQS9CUjtBQW1DUlksdUJBQWU7QUFDWGQsa0JBQU1hLE1BREs7QUFFWFgsbUJBQU87QUFGSSxTQW5DUDtBQXVDUmEsY0FBTTtBQUNGZixrQkFBTUMsTUFESjtBQUVGQyxtQkFBTztBQUZMLFNBdkNFO0FBMkNSYyxxQkFBYTtBQUNUaEIsa0JBQU1DLE1BREc7QUFFVEMsbUJBQU87QUFGRSxTQTNDTDtBQStDUmUsMEJBQWtCaEIsTUEvQ1Y7QUFnRFJpQix5QkFBaUJqQixNQWhEVDtBQWlEUmtCLHdCQUFnQmxCLE1BakRSO0FBa0RSbUIseUJBQWlCZDtBQWxEVCxLQUhOOztBQXdETmUsYUFBUztBQUNMQyxpQkFESyx1QkFDUTtBQUNULGdCQUFJLEtBQUtDLElBQUwsQ0FBVWxCLFFBQWQsRUFBd0IsT0FBTyxLQUFQOztBQUV4QixpQkFBS21CLFlBQUwsQ0FBa0IsT0FBbEI7QUFDSDtBQUxJO0FBeERILENBQVYiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xuICAgIGV4dGVybmFsQ2xhc3NlczogWydpLWNsYXNzJ10sXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGRlZmF1bHQsIHByaW1hcnksIGdob3N0LCBpbmZvLCBzdWNjZXNzLCB3YXJuaW5nLCBlcnJvclxuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIGRlZmF1bHQsIGxhcmdlLCBzbWFsbFxuICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIGNpcmNsZSwgc3F1YXJlXG4gICAgICAgIHNoYXBlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ3NxdWFyZSdcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRpbmc6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGxvbmc6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgb3BlblR5cGU6IFN0cmluZyxcbiAgICAgICAgYXBwUGFyYW1ldGVyOiBTdHJpbmcsXG4gICAgICAgIGhvdmVyU3RvcFByb3BhZ2F0aW9uOiBCb29sZWFuLFxuICAgICAgICBob3ZlclN0YXJ0VGltZToge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDIwXG4gICAgICAgIH0sXG4gICAgICAgIGhvdmVyU3RheVRpbWU6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiA3MFxuICAgICAgICB9LFxuICAgICAgICBsYW5nOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ2VuJ1xuICAgICAgICB9LFxuICAgICAgICBzZXNzaW9uRnJvbToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIHNlbmRNZXNzYWdlVGl0bGU6IFN0cmluZyxcbiAgICAgICAgc2VuZE1lc3NhZ2VQYXRoOiBTdHJpbmcsXG4gICAgICAgIHNlbmRNZXNzYWdlSW1nOiBTdHJpbmcsXG4gICAgICAgIHNob3dNZXNzYWdlQ2FyZDogQm9vbGVhblxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGhhbmRsZVRhcCAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmRpc2FibGVkKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdjbGljaycpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=