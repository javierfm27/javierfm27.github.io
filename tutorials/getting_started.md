---
layout: page
title: Getting Started
---
<!-- TUTORIALS EXAMPLE -->
<!-- TEXT -->
## TEST TUTORIALS - TITLE

# Aquas nam postquam limes manus

## Nondum furtim dummodo Iunonia

Lorem markdownum longis. Vobis fugiunt restitit vir urbis ipsum sunt circuiere
sit nec illum frustraque ut.

1. Multa et
2. An concursum saepe
3. Sine corpus

## Huius litora capit indulsit legit fumo seque

Amo nec conponi requiro, et e obortis artus, modo multi **mortisque primordia
dictis** silices fletus Calliope narret! Aut munere laterum frustra exemploque
Corinthus arbore meae visaque unum desint miserum insistere communicat. Iuro
saepibus, denique oculi undas mitia gradibus ad ipsa? Circum multaeque victus,
extentam hunc, non excussit fulva lacrimasque nec flumina. Placebant dextra,
ostendit utraque in terras possit monimenta o volat.

1. Muneris tardis abdita enim opus iurabat modo
2. Nunc agit aderam est amantibus satis et
3. Mutatum in quoque cruore vulnera abluit in

<!-- INSERCIÓN DE CÓDIGO -->
```python
def threshold_filter(self, rr):
    """
    Function that identifies a rr-interval as non-sinusal following the rule:
        if RR(n) > thr_up or RR(n) < thr_low
            where:
            thr_up = 2000
            thr_low = 300
    Verify this thresholds and find a reference
    Output arguments:
        ind_not_N:  has 1 in the position where there is a non-sinusal beat as
                    classified by the threshold criterion
    """
    ind_not_N = [False]*len(rr)
    ind_not_N = np.array(ind_not_N) #convert to a numpy array

    pos_ind_not_N = np.concatenate((np.where(rr > 2000)[0],np.where(rr<300)[0]))

    if len(pos_ind_not_N) > 0:
        ind_not_N[pos_ind_not_N] = True

    return ind_not_N

```
```
import Javi
```
<!-- MÁS TEXTO -->
 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra maximus consequat. Etiam quis volutpat ex. Ut justo quam, fermentum nec lacus at, pellentesque blandit est. Pellentesque dapibus mauris ipsum, mattis ultricies velit imperdiet eget. Nam ut semper dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed sodales velit justo, nec tristique ipsum viverra et. Phasellus vehicula, libero ac vehicula dictum, ipsum velit luctus justo, quis interdum nisi tellus sit amet sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce vitae enim quis ligula posuere ultrices sit amet sit amet lectus.

<!-- INCLUSIÓN DE GRÁFICAS -->
Prueba de la variable de entorno de file.path -> {{site.path_assets}}

A continuación, vamos a probar a incluir una gráfica.
![Test of include graphic](/assets/img/maps/Figure_test.png)
