import BoardItems from "@/components/board-items.vue"
import { shallowMount } from "@vue/test-utils";
const boardProps = {
    "title": "Copywriting Content",
    "description": "Create content for peaceland app",
    "tick": true,
    "bookmark": false,
    "tag": "Low"
}

describe('BoardsItems should ', () => {

    const mount = shallowMount(BoardItems, {
        propsData: {
            list: boardProps
        }
    })

    test('should show the correct description on the DOM', () => {
        const description = mount.find('.__description')
        expect(description.text()).toBe(boardProps.description)
    });

    test('should not show img if no valid url in props', () => {
        const image = mount.find('.__task_image')
        expect(image.exists()).toBeFalsy()
    });

    test('should show image if the url was passed', () => {
        const mountBoard = shallowMount(BoardItems, {
            propsData: {
                list: {
                    ...boardProps,
                    img: 'http://localhost:400/imge.jpeg'
                }
            }
        })
        const image = mountBoard.find('.__task_image')
        expect(image.exists()).toBe(true)
    });
});
