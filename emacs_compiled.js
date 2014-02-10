if(!lt.util.load.provided_QMARK_('lt.plugins.emacs')) {
goog.provide('lt.plugins.emacs');
goog.require('cljs.core');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.context');
goog.require('lt.objs.context');
goog.require('lt.objs.editor.pool');
goog.require('lt.util.load');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.util.load');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.sidebar.command');
lt.plugins.emacs.make_emacs_editor = (function make_emacs_editor(ed){lt.objs.editor.set_options.call(null,ed,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyMap","keyMap",4174180847),"emacs"], null));
return lt.object.add_tags.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.keys.emacs","editor.keys.emacs",3283998978)], null));
});
lt.plugins.emacs.make_normal_editor = (function make_normal_editor(ed){lt.objs.editor.set_options.call(null,ed,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyMap","keyMap",4174180847),"default"], null));
return lt.object.remove_tags.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.keys.emacs","editor.keys.emacs",3283998978)], null));
});
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"emacs.keymap-cmd","emacs.keymap-cmd",1777328545),new cljs.core.Keyword(null,"desc","desc",1016984067),"Emacs: map to CodeMirror's emacs keymap",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (keys,km){var temp__4092__auto__ = ((CodeMirror.keyMap[(function (){var or__6757__auto__ = km;if(cljs.core.truth_(or__6757__auto__))
{return or__6757__auto__;
} else
{return "emacs";
}
})()])[keys]);if(cljs.core.truth_(temp__4092__auto__))
{var cmd = temp__4092__auto__;if(typeof cmd === 'string')
{return lt.objs.editor.__GT_cm_ed.call(null,lt.objs.editor.pool.last_active.call(null)).execCommand(cmd);
} else
{return cmd.call(null,lt.objs.editor.__GT_cm_ed.call(null,lt.objs.editor.pool.last_active.call(null)));
}
} else
{return null;
}
})], null));
lt.plugins.emacs.__BEH__activate_emacs = (function __BEH__activate_emacs(this$){if(cljs.core.truth_(CodeMirror.keyMap.emacs))
{} else
{lt.util.load.js.call(null,"core/node_modules/codemirror/emacs.js",new cljs.core.Keyword(null,"sync","sync",1017449997));
}
if(cljs.core.truth_(lt.object.has_tag_QMARK_.call(null,this$,new cljs.core.Keyword(null,"editor.keys.emacs","editor.keys.emacs",3283998978))))
{return null;
} else
{return lt.plugins.emacs.make_emacs_editor.call(null,this$);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.emacs","activate-emacs","lt.plugins.emacs/activate-emacs",2664292249),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.emacs.__BEH__activate_emacs,new cljs.core.Keyword(null,"desc","desc",1016984067),"Emacs: Activate Emacs mode",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.vim","activate-vim","lt.plugins.vim/activate-vim",4199850093)], null));
}

//# sourceMappingURL=emacs_compiled.js.map