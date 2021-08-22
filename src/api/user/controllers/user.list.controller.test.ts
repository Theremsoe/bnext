import * as user_list_controller from "./user.list.controller"
// @ponicode
describe("paginate", () => {
    let inst: any

    beforeEach(() => {
        inst = new user_list_controller.UserListController()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.paginate(0.0, 200)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst.paginate(1, 15)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inst.paginate(6.0, 15)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inst.paginate(1, 1024)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            inst.paginate(10000, 15)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            inst.paginate(Infinity, Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
