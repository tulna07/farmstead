const featureItems = document.getElementsByClassName("features-item");

for (let i = 0; i < featureItems.length; ++i) {
  featureItems[i].onclick = function () {
    const featureItem_Active = document.getElementsByClassName(
      "features-item__active"
    );
    featureItem_Active[0]?.classList?.remove("features-item__active");

    featureItems[i].classList.add("features-item__active");
  };
}
