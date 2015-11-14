// Problem: It looks gross in smaller browser widths and small devices
// Solution: To hide the text links and swap them out for a more appropriate navigation

// 1: Create a select and append to #menu
var $select = $("<select></select>");
$("#menu").append($select);

// 2: Cycle over menu links
$("#menu a").each(function() {
    var $anchor = $(this);
    
    // 2.1: Create an option
    var $option = $("<option></option>");
    
    // 5: Deal with selected option depending on current page
    if ($anchor.parent().hasClass("selected")) {
        $option.prop("selected", true);
    }
    
    // 2.2: Option's value is the href
    $option.val($anchor.attr("href"));
    
    // 2.3: Option's text is the text of link
    $option.text($anchor.text());
    
    // 2.4: Append option to select
    $select.append($option);
});

// Bind the select to event handler 
$select.change(function() {
    // 3.2: Go to select's location
    window.location = $select.val();
});