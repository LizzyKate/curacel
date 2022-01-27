import BoardTitle from "@/components/board-title.vue"
import { shallowMount } from "@vue/test-utils";
const boardProps = "BackLog"

describe('BoardsItems should ', () => {

    const mount = shallowMount(BoardTitle, {
        propsData: {
            heading: boardProps
        }
    })

    test('should show the correct heading on the DOM', () => {
        const description = mount.find('.__heading')
        expect(description.text()).toBe(boardProps)
    });


});
