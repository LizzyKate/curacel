import { mount, shallowMount } from '@vue/test-utils'
import * as data from '../db.json'
import Board from "@/components/board.vue"
import BoardItems from "@/components/board-items.vue"





const mock = jest.fn()


describe('Drag and Drop', () => {
    const wrapper = shallowMount(Board, {
        mocks: {
            $axios: {
                $get: mock
            }
        },

    })

    wrapper.setData({
        tasks: data.tasks
    })
    test('That a task is being draged and dropped', () => {
        expect(mock).toHaveBeenCalled()
    })

    test('should render BoardTitle and Board Items if data is set', () => {

        const wrapper = mount(Board)
        wrapper.setData({
            tasks: data.tasks
        })
        expect(wrapper.findComponent('board-items')).toBeTruthy()
    });

    test('drag and drop wrapper should show ', () => {
        expect(wrapper.find('.__height')).toBeTruthy()
        const draggable = wrapper.findComponent('draggable')
    });


})


//         const getTableCells = () => Array.from(mountNode).querySelectorAll('.field')

//         const createBubbledEvent = (type, props = {}) => {
//             const event = new Event(type, { bubbles: true })
//             Object.assign(event, props);
//             return event
//         }
//         const tableCells = getTableCells()
//         const startingNode = tableCells[0];
//         const endingNode = tableCells[2]

//         startingNode.dispatchEvent(
//             createBubbledEvent("dragstart", { clientX: 0, clientY: 0 })
//         )
//         endingNode.dispatchEvent(
//             createBubbledEvent("drop", { clientX: 0, clientY: 1 })
//         )
//     })
// })




describe('if Board is mounted and not empty it should show on the DOM', () => {
    // const wrapper = mount(Board)

    test('should not render any card if there is no task', () => {
        // wrapper.setData({
        //     tasks: []
        // })

        // expect(wrapper.find())
    })
})
