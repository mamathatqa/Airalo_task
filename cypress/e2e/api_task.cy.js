import testdata  from '../fixtures/api_testdata.json';

let token
let simIds = [];
let simiccid, partialiccid
let allSimIds = [];

describe('esim Orders', () => {
    before(() => {
        cy.getAuthToken().then(response =>{
            token = response.body.data.access_token
        })
    })
    
    it('should submit order', () => {
        const orderDetails = {
            quantity : testdata.orderDetails.quantity,
            package_id : testdata.orderDetails.package_id,
            type : testdata.orderDetails.type,
            description : testdata.orderDetails.description
        }
        cy.submitOrderViaAPI(token, orderDetails).then(response => {
            expect(response.status).to.eq(200)
            expect(response.body.data.package_id).to.eq('merhaba-7days-1gb')
            expect(response.body.data.quantity).to.eq(6)
            expect(response.body.data.type).to.eq('sim')
            expect(response.body.data.sims).to.have.length(6)
            simIds = response.body.data.sims.map(sim => sim.id)
            simiccid = response.body.data.sims[0].iccid
        })
    })

    it('should verify the created sims in getSimsList', () => {
        var todaydate = getFormattedDate().toString()
        partialiccid = simiccid.substring(0, 16);
        const orderFilters = {
           'filter[created_at]' : `${todaydate} - ${todaydate}`,
           'filter[iccid]]' : partialiccid,
            limit : testdata.orderFilters.limit,
            page : testdata.orderFilters.page
        }
        cy.GetOrdersListViaAPI(token, orderFilters).then( response => {
            expect(response.status).to.eq(200)
            allSimIds = response.body.data.map(sim => sim.id)
            cy.log(allSimIds)
            const result = containsAllElements(allSimIds, simIds)
            expect(result).to.be.true;
        })
    })
})

const getFormattedDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

const containsAllElements = (arr1, arr2) => {
    return arr2.every(element => arr1.includes(element));
};