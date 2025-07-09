function updateContent(text) {
    document.getElementById("content").innerHTML = `<p>${text}</p>`;
}

function resetContent() {
    document.getElementById("content").innerHTML = `<p>Thirsty Robots is a series of playful interventions that explore our growing reliance on Artificial Intelligence and the hidden environmental cost behind it — specifically, AI’s water usage.<br><br>This project – designed and coded by Anaya Maheshwari – was inspired by nascent conversations seen online about the ecological impact of AI and the noticeable lack of transparency from the companies leading this change.<br><br>As AI becomes embedded in everything from washing machines to wearables, questions about sustainability are being drowned out by how quickly this technology is being adopted.</p>`;
}
