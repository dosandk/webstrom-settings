define(
    'views/${PARENT_DIR}/${NAME}',
    [
        'views/ui/default',
        'jquery'
    ],
    function(App, $) {
        App.defineScope('${PARENT_DIR}/${NAME}');

        App.extend('View', '${PARENT_DIR}/${NAME}', 'page', 'ui/default', {
            template: 'tpl',
            onInitialize: function() {
                var self = this;
                self.childs.NAME = App.create('View', 'NAME', '${PARENT_DIR}/${NAME}', { parent: self });

            }
        });
        
        App.extend('View', 'NAME', 'main', 'default', {
			el: '#',
			template: 'tpl',
			onInitialize: function() {
			    var self = this;
			    
			    self.render();
			},
			onRender: function() {
				var self = this;
				
				self.${DS}el.html(self.getTemplate(self.template, {
					
                }));
			}
		});
        
        return App;
    }
)