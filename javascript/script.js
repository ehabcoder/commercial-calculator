
let brex, stripe, amex;

// the function is for ream-time change.
// so it change the spinners automamtically.
function changeSpinner() {

    let vendor_bills = +document.getElementById('vendor').value;
    let media = +document.getElementById('media').value;
    let corp_spend = +document.getElementById('corp').value;
    let team_project = +document.getElementById('team').value;
    
    if(vendor_bills && media && corp_spend && team_project) {
        let sum = ( vendor_bills + media + corp_spend + team_project)
        brex = (Math.round((sum * 0.3) * 100) / 100).toFixed(2);
        stripe = (Math.round((sum * 2.9) * 100) / 100).toFixed(2);
        amex = (Math.round((sum * 1.3) * 100) / 100).toFixed(2);
        let unlimited_rewards =  (Math.round((sum * 1.1) * 100) / 100).toFixed(2);
        let lifeTime_rewards = (Math.round((sum * 1.2) * 100) / 100).toFixed(2);
        
        document.querySelector('.spinner1').innerHTML = '';
        document.querySelector('.spinner2').innerHTML = '';

        document.querySelector('.spinner1').style.width = `${50}%`
        document.querySelector('.spinner1').append('$', unlimited_rewards)

        document.querySelector('.spinner2').style.width = `${70}%`
        document.querySelector('.spinner2').append('$', lifeTime_rewards)

        // make buttons available
        document.querySelectorAll('button').forEach(button => {
            button.disabled = false;
        })
          
    }
}


function showBrex() {
    document.querySelector('.stripeSpan').style.setProperty('display', 'none', 'important');
    document.querySelector('.stripeSpinner').style.display = 'none';

    document.querySelector('.amexSpan').style.setProperty('display', 'none', 'important');
    document.querySelector('.amexSpinner').style.display = 'none';
    // change place of the last span and spinner
    document.querySelector('.span2').style.top = '6rem';
    document.querySelector('.spinner2').style.top = '12.5rem';
    
    document.querySelector('.span1').style.top = '4rem';
    document.querySelector('.spinner1').style.top = '10.5rem';

    document.querySelector('.brexSpan').style.setProperty('display', 'block', 'important');
    document.querySelector('.brexSpinner').style.display = 'block';

    document.querySelector('.brexSpinner').innerHTML = '';

    document.querySelector('.brexSpinner').style.width = `${30}%`
    document.querySelector('.brexSpinner').append('$', brex)
}


function showStripe() {
    // change place of the last span and spinner
    document.querySelector('.span2').style.top = '6rem';
    document.querySelector('.spinner2').style.top = '12.5rem';
    
    document.querySelector('.span1').style.top = '4rem';
    document.querySelector('.spinner1').style.top = '10.5rem';

    document.querySelector('.brexSpan').style.setProperty('display', 'none', 'important');
    document.querySelector('.brexSpinner').style.display = 'none';

    document.querySelector('.amexSpan').style.setProperty('display', 'none', 'important');
    document.querySelector('.amexSpinner').style.display = 'none';

    document.querySelector('.stripeSpan').style.setProperty('display', 'block', 'important');
    document.querySelector('.stripeSpinner').style.display = 'block';

    document.querySelector('.stripeSpinner').innerHTML = '';

    document.querySelector('.stripeSpinner').style.width = `${30}%`
    document.querySelector('.stripeSpinner').append('$', stripe)
}

function showAmex() {
    // change place of the last span and spinner
    document.querySelector('.span2').style.top = '6rem';
    document.querySelector('.spinner2').style.top = '12.5rem';
    
    document.querySelector('.span1').style.top = '4rem';
    document.querySelector('.spinner1').style.top = '10.5rem';

    document.querySelector('.brexSpan').style.setProperty('display', 'none', 'important');
    document.querySelector('.brexSpinner').style.display = 'none';

    document.querySelector('.stripeSpan').style.setProperty('display', 'none', 'important');
    document.querySelector('.stripeSpinner').style.display = 'none';

    document.querySelector('.amexSpan').style.setProperty('display', 'block', 'important');
    document.querySelector('.amexSpinner').style.display = 'block';

    document.querySelector('.amexSpinner').innerHTML = '';

    document.querySelector('.amexSpinner').style.width = `${30}%`
    document.querySelector('.amexSpinner').append('$', amex)
}