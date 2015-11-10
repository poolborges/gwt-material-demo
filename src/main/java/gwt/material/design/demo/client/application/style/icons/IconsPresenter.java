package gwt.material.design.demo.client.application.style.icons;

import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import gwt.material.design.demo.client.application.ApplicationPresenter;
import gwt.material.design.demo.client.place.NameTokens;

public class IconsPresenter extends Presenter<IconsPresenter.MyView, IconsPresenter.MyProxy> {
    interface MyView extends View {
    }

    @NameToken(NameTokens.icons)
    @ProxyCodeSplit
    interface MyProxy extends ProxyPlace<IconsPresenter> {
    }

    @Inject
    IconsPresenter(
            EventBus eventBus,
            MyView view,
            MyProxy proxy) {
        super(eventBus, view, proxy, ApplicationPresenter.SLOT_MainContent);
    }
}